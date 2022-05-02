import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { refreshAccessToken } from '../../redux/session/thunks/utils';

const PersistLogin = () => {
  const loading = useSelector(({ signUpReducer }) => signUpReducer.loading);
  const accessToken = useSelector(({ signUpReducer }) => signUpReducer.accessToken);
  const refreshToken = useSelector(({ signUpReducer }) => signUpReducer.refreshToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyRefreshToken = () => {
      try {
        dispatch(refreshAccessToken(refreshToken));
      } catch (error) {
        throw new Error(error);
      }
    };

    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return (
    <>
      {loading ? <h1>Loading...</h1> : <Outlet />}
    </>
  );
};

export default PersistLogin;
