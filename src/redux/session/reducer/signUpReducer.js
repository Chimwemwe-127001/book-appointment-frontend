import { getRefreshToken, setRefreshToken, deleteRefreshToken } from '../helpers';
import {
  SIGN_UP_SUCCESS, SIGN_UP_FAILURE, REFRESH_ACCESS_TOKEN_SUCCESS, REFRESH_ACCESS_TOKEN_FAILURE,
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE, CLEAR_ERROR,
} from '../action/sessionActions';

const initialState = {
  currentUser: {
    id: null,
    email: null,
    role: null,
    createdAt: null,
  },
  error: false,
  loading: true,
  errorMsgs: '',
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
        errorMsgs: payload.error,
      };
    case LOGIN_SUCCESS:
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
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsgs: payload.error,
      };
    case LOGOUT_SUCCESS:
      deleteRefreshToken();
      return {
        ...state,
        ...initialState,
        loading: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsgs: payload.error,
      };
    case REFRESH_ACCESS_TOKEN_SUCCESS:
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
    case REFRESH_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMsgs: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default signUpReducer;
