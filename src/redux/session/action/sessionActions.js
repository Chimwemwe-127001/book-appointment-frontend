export const SIGN_UP_SUCCESS = 'sessions/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'sessions/SIGN_UP_FAILURE';
export const REFRESH_ACCESS_TOKEN_SUCCESS = 'sessions/REFRESH_ACCESS_TOKEN_SUCCESS';
export const REFRESH_ACCESS_TOKEN_FAILURE = 'sessions/REFRESH_ACCESS_TOKEN_FAILURE';
export const LOGIN_SUCCESS = 'sessions/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'sessions/LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'sessions/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'sessions/LOGOUT_FAILURE';
export const CLEAR_ERROR = 'sessions/CLEAR_ERROR';

export const registerActionSuccess = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const registerActionFailure = (payload) => ({
  type: SIGN_UP_FAILURE,
  payload,
});

export const refreshTokenSuccess = (payload) => ({
  type: REFRESH_ACCESS_TOKEN_SUCCESS,
  payload,
});

export const refreshTokenFailure = (payload) => ({
  type: REFRESH_ACCESS_TOKEN_FAILURE,
  payload,
});

export const loginActionSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginActionFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const logoutActionSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const logoutActionFailure = (payload) => ({
  type: LOGOUT_FAILURE,
  payload,
});

export const clearErrorAction = () => ({
  type: CLEAR_ERROR,
});
