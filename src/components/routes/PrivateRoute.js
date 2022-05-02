import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line consistent-return
const PrivateRoute = ({ children }) => {
  // const loading = useSelector(({ signUpReducer }) => signUpReducer.loading);
  const loading = false;
  const accessToken = useSelector(({ signUpReducer }) => signUpReducer.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken && !loading) {
      navigate('/login');
    }
  }, []);

  if (accessToken) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <p>Something went wrong</p>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
