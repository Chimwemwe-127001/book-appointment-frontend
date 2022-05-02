import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line consistent-return
const PublicRoutes = ({ children }) => {
  const loading = false;
  const accessToken = false;
  const navigate = useNavigate();

  if (!accessToken && !loading) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  } if (accessToken && !loading) {
    navigate('/login');
  } else {
    return (
      <p>Something went wrong</p>
    );
  }
};

PublicRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoutes;
