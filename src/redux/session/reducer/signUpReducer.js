import { getRefreshToken, setRefreshToken, deleteRefreshToken } from '../helpers';
import { SIGN_UP } from '../action/sessionActions';

const initialState = {
  currentUser: {
    id: null,
    email: null,
    role: null,
    createdAt: null,
  },
  errors: false,
  loading: true,
  errorMsgs: [],
  accessToken: null,
  refreshToken: getRefreshToken(),
  expiresIn: null,
  tokenType: null,
};

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
      return {
        ...state,
        currentUser: {
          id: payload.id,
          email: payload.current_user.email,
          role: payload.current_user.role,
          createdAt: payload.current_user.created_at,
        },
        loading: false,
        accessToken: payload.access_token,
        expiresIn: payload.expires_in,
      };
    default:
      return state;
  }
};

export default signUpReducer;
