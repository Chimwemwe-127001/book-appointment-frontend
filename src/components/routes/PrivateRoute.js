import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line consistent-return
const PrivateRoute = ({ children }) => {
  const loading = useSelector(({ signUpReducer }) => signUpReducer.loading);
  const accessToken = useSelector(({ signUpReducer }) => signUpReducer.accessToken);
  const navigate = useNavigate();

  if (accessToken) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  } if (!accessToken && !loading) {
    navigate('/login');
  }
  return (
    <p>Something went wrong</p>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
