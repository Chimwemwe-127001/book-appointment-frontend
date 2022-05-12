/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { loginUser } from '../../redux/session/thunks/utils';
import { clearErrorAction } from '../../redux/session/action/sessionActions';

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const errorMsgs = useSelector(({ signUpReducer }) => signUpReducer.errorMsgs);

  useEffect(() => {
    emailRef.current.focus();
    if (errorMsgs === 'Invalid Email/Password. Please try again') {
      setError(errorMsgs);
      dispatch(clearErrorAction());
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!emailRef.current.value || !passwordRef.current.value) {
      return setError('Please fill out all fields');
    }

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await dispatch(loginUser(payload));

    if (errorMsgs === 'Invalid Email/Password. Please try again') {
      setError(errorMsgs);
      dispatch(clearErrorAction());
    } else {
      navigate('/');
    }
  };

  return (
    <section className="session-form">
      <div className="session-container">
        <div className="heading">
          <h1>Login</h1>
          <hr />
        </div>
        <div className="errors">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input type="email" id="email" ref={emailRef} className="input_field" required />
              <label htmlFor="email" className="input_label">
                Email address
              </label>
            </div>
            <div className="form-group">
              <input type={showPassword ? 'text' : 'password'} id="password" ref={passwordRef} className="input_field" required />
              <label htmlFor="password" className="input_label">
                Password
              </label>
              <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
            </div>
            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Don&apos;t have an account yet?
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
