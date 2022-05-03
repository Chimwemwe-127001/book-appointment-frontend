/* eslint-disable consistent-return */
import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../redux/session/thunks/utils';

const Signup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const errorMsgs = useSelector(({ signUpReducer }) => signUpReducer.errorMsgs);

  useEffect(() => {
    emailRef.current.focus();
    if (errorMsgs) {
      setError(errorMsgs);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!emailRef.current.value || !passwordRef.current.value) {
      return setError('Please fill out all fields');
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('The passwords do not match');
    }

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await dispatch(signUpUser(payload));

    if (errorMsgs) {
      setError(errorMsgs);
    } else {
      navigate('/');
    }
  };

  return (
    <section>
      <div className="heading">
        <h1>Sign Up</h1>
      </div>
      <div className="errors">
        <p style={{ color: 'red' }}>{error}</p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">
            Email address
            <input type="email" id="email" ref={emailRef} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input type={showPassword ? 'text' : 'password'} id="password" ref={passwordRef} />
          </label>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'hide' : 'show'}</button>
        </div>
        <div className="form-group">
          <label htmlFor="password-confirmation">
            Password Confirmation
            <input type={showPasswordConfirmation ? 'text' : 'password'} id="password-confirmation" ref={passwordConfirmRef} />
          </label>
          <button type="button" onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}>{showPasswordConfirmation ? 'hide' : 'show'}</button>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
