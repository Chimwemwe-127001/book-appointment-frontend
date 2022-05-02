import {
  registerActionSuccess,
  registerActionFailure,
  refreshTokenSuccess,
  refreshTokenFailure,
} from '../action/sessionActions';
import { registerAction, requestAccessTokenWithRefreshToken, getCurrentUser } from '../../../helpers/api/sessionAPI';

export const signUpUser = (payload) => async (dispatch) => {
  try {
    const response = await registerAction(payload);
    if (response.error) {
      dispatch(registerActionFailure(response));
    }
    dispatch(registerActionSuccess(response));
  } catch (error) {
    throw new Error(error);
  }
};

export const refreshAccessToken = (refreshToken) => async (dispatch) => {
  if (!refreshToken) {
    dispatch(refreshTokenFailure('refresh token is required'));
  }
  try {
    const refreshResponse = await requestAccessTokenWithRefreshToken(
      refreshToken,
    );
    if (refreshResponse.error) {
      dispatch(refreshTokenFailure(refreshResponse.data));
    }
    const userResponse = await getCurrentUser(refreshResponse.access_token);
    if (userResponse.error) {
      dispatch(refreshTokenFailure(userResponse.data));
    }
    const response = {
      ...refreshResponse,
      ...userResponse,
    };
    dispatch(refreshTokenSuccess(response));
  } catch (error) {
    throw new Error(error);
  }
};
