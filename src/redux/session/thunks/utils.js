import {
  registerActionSuccess,
  registerActionFailure,
  refreshTokenSuccess,
  refreshTokenFailure,
  loginActionSuccess,
  loginActionFailure,
} from '../action/sessionActions';
import {
  registerAction, loginAction, requestAccessTokenWithRefreshToken, getCurrentUser,
} from '../../../helpers/api/sessionAPI';

export const signUpUser = (payload) => async (dispatch) => {
  try {
    const response = await registerAction(payload);
    if (response.error) {
      return dispatch(registerActionFailure(response));
    }
    dispatch(registerActionSuccess(response));
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUser = (payload) => async (dispatch) => {
  try {
    const loginResponse = await loginAction(payload);

    if (loginResponse.error) {
      return dispatch(loginActionFailure({ error: 'Invalid Email/Password. Please try again' }));
    }
    const userResponse = await getCurrentUser(loginResponse.access_token);
    if (userResponse.error) {
      return dispatch(loginActionFailure(userResponse.data));
    }
    const response = {
      ...loginResponse,
      ...userResponse,
    };
    dispatch(loginActionSuccess(response));
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
      return dispatch(refreshTokenFailure(refreshResponse.data));
    }
    const userResponse = await getCurrentUser(refreshResponse.access_token);
    if (userResponse.error) {
      return dispatch(refreshTokenFailure(userResponse.data));
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
