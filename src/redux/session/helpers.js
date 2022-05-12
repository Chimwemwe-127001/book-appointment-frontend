export const getRefreshToken = () => localStorage.getItem('refreshToken');

export const setRefreshToken = (value) => {
  localStorage.setItem('refreshToken', value);
};

export const deleteRefreshToken = () => {
  localStorage.removeItem('refreshToken');
};
