import axios from 'axios';
import instance from './axios';

const BASE_URL = 'http://localhost:3000/api/v1';
const LOGIN_URL = `${BASE_URL}/oauth/token`;
// const LOGOUT_URL = '/oauth/revoke';
const SIGNUP_URL = `${BASE_URL}/users`;
const CURRENT_USER_URL = `${BASE_URL}/users/me`;

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const registerAction = async (payload) => {
  const data = {
    email: payload.email,
    password: payload.password,
    client_id: CLIENT_ID,
  };
  try {
    const response = await axios.post(SIGNUP_URL, data, instance);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const requestAccessTokenWithRefreshToken = async (refreshToken) => {
  const data = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };
  try {
    const response = await axios.post(LOGIN_URL, data, instance);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCurrentUser = async (accessToken) => {
  try {
    const response = await axios.get(CURRENT_USER_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
