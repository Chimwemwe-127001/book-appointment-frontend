import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../redux/session/thunks/utils';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(({ signUpReducer }) => signUpReducer.accessToken);

  useEffect(() => {
    if (accessToken) dispatch(logOutUser(accessToken));
    navigate('/login');
  }, []);

  return (
    <p>Logged out...</p>
  );
};

export default Logout;
