import { getRefreshToken, setRefreshToken, deleteRefreshToken } from '../helpers';
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../action/sessionActions';

const initialState = {
  currentUser: {
    id: null,
    email: null,
    role: null,
    createdAt: null,
  },
  error: false,
  loading: true,
  errorMsgs: [],
  accessToken: null,
  refreshToken: getRefreshToken(),
  expiresIn: null,
  tokenType: null,
};

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      setRefreshToken(payload.refresh_token);
      return {
        ...state,
        currentUser: {
          id: payload.id,
          email: payload.email,
          role: payload.role,
          createdAt: payload.created_at,
        },
        loading: false,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
        expiresIn: payload.expires_in,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsgs: payload.errors,
      };
    default:
      return state;
  }
};

export default signUpReducer;
