export const SIGN_UP_SUCCESS = 'sessions/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'sessions/SIGN_UP_FAILURE';

export const registerActionSuccess = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const registerActionFailure = (payload) => ({
  type: SIGN_UP_FAILURE,
  payload,
});
