import React from "react";
import { Link,  } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  // const { signInWithGoogle } = useAuth();
  // const location = useLocation();
  // const redirect_url = location.state?.from || "/home";
  // const history = useHistory();
  // const handleGoogleLogin = () => {
  //   signInWithGoogle()
  //   .then(result => {
  //     history.push(redirect_url);
  //   });
  // };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" id="" placeholder="your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="password should be at 6 characters"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to Ema-Jhon?<Link to="/register">Create Account</Link>
        </p>
        <div>---------or---------</div>
        <button  className="btn-regular">
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
