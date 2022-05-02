import { registerActionSuccess, registerActionFailure } from '../action/sessionActions';
import registerAction from '../../../helpers/api/sessionAPI';

const signUpUser = (payload) => async (dispatch) => {
  try {
    const response = await registerAction(payload);
    if (response.error) {
      throw response.error;
    }
    dispatch(registerActionSuccess(response));
  } catch (error) {
    dispatch(registerActionFailure(error));
  }
};

export default signUpUser;
