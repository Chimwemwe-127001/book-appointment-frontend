/* eslint-disable consistent-return */
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

const PublicRoutes = ({ children }) => {
  const loading = false;
  const accessToken = false;
  const navigate = useNavigate();

  if (!accessToken && !loading) {
    return children;
  } if (loading) {
    return <Spinner />;
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
