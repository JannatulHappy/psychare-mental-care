import React, { useState } from "react";
import { Link,useHistory,useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const history = useHistory();
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      history.push(redirect_url);
    });
  };
  const {error,
    signInWithGoogle,
    user,
    handleUserLogin,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
        <input
                onChange={handleEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
          <br />
          <input
                onChange={handlePassword}
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
          <br />
          <button onClick={handleLogin} className="btn btn-success ms-1">
                  Login
                </button>
        </form>
        <p>
          New to Ema-Jhon?<Link to="/register">Create Account</Link>
        </p>
       <p> {error}</p>
        <div>---------or---------</div>
        <button onClick={handleGoogleLogin}
                className="btn btn-warning m-2">Sign in With Google</button>
      </div>
    </div>
  );
};

export default Login;
