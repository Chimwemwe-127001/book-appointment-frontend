import axios from 'axios';

const instance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
      withCredentials: true,
    },
  });

  return axiosInstance;
};

export default instance;
