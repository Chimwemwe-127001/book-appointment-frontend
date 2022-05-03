import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Modal = ({ handleModal }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Are you sure you want to logout?</h3>
        <div>
          <button type="button" onClick={handleModal}>CANCEL</button>
          <button type="button" onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default Modal;
