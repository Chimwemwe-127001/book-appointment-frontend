import { useNavigate } from 'react-router-dom';
import PropTypes from 'react';

// eslint-disable-next-line consistent-return
const PrivateRoute = ({ children }) => {
  const loading = false;
  const accessToken = false;
  const navigate = useNavigate();

  if (accessToken) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  } if (!accessToken && !loading) {
    navigate('/login');
  } else {
    return (
      <p>Something went wrong</p>
    );
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
