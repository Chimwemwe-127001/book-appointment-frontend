import axios from 'axios';

const LOGIN_URL = '/oauth/token';
const LOGOUT_URL = '/oauth/revoke';
const SIGNUP_URL = '/users';
const CURRENT_USER_URL = '/users/me';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const registerAction = async ({ email, password }) => {
  const data = {
    email,
    password,
  };
  try {
    const response = await axios.post(SIGNUP_URL, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default registerAction;
