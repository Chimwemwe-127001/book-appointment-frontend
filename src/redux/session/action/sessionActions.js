export const SIGN_UP = 'sessions/SIGN_UP';

const registerAction = (payload) => ({
  type: SIGN_UP,
  payload,
});

export default registerAction;
