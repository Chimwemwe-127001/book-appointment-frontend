import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  let errorMsgs = [];
  // const loading = false;

  useEffect(() => {
    emailRef.current.focus();
    if (errorMsgs.length) {
      setErrors(errorMsgs);
      errorMsgs = [];
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    if (!emailRef.current.value || !passwordRef.current.value) {
      setErrors(['Please fill out all fields']);
      return;
    }

    // const payload = {
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    // }
    // const response = dispatch(loginUser());
    const response = ['Ooops! Something went wrong'];
    if (errorMsgs.length > 0) {
      setErrors(response);
    } else {
      navigate('/');
    }
  }
  return (
    <section>
      <div className="header">
        <h1>Login</h1>
      </div>
      <div className="errors">
        {errors.length > 0 && errors.map((error) => (
          <p key={error} style={{ color: 'red' }}>{error}</p>
        ))}
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
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <p>
          Don&apos;t have an account yet?
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
