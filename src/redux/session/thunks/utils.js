import { registerActionSuccess, registerActionFailure } from "../action/sessionActions";

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
