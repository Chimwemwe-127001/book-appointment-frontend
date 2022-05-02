import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {
  const loading = false;
  const accessToken = false;
  const refreshToken = null;

  useEffect(() => {
    const verifyRefreshToken = () => {
      try {
        console.log('Verifying Refresh Token');
      } catch (error) {
        console.log('Could not verify Refresh token');
      }
    };

    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return (
    <>
      {loading ? <p>Loading...</p> : <Outlet />}
    </>
  );
};

export default PersistLogin;
