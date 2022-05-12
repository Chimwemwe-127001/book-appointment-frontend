import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

// eslint-disable-next-line consistent-return
const PrivateRoute = ({ children }) => {
  const loading = useSelector(({ signUpReducer }) => signUpReducer.loading);
  const accessToken = useSelector(({ signUpReducer }) => signUpReducer.accessToken);
  const errorMsgs = useSelector(({ signUpReducer }) => signUpReducer.errorMsgs);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken && !loading) {
      if (!errorMsgs || errorMsgs === 'Invalid Email/Password. Please try again') {
        navigate('/login');
      } else {
        navigate('/signup');
      }
    }
  }, []);

  if (accessToken) {
    return children;
  } if (loading) {
    return <Spinner />;
  }
  return (
    <p>Something went wrong</p>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
