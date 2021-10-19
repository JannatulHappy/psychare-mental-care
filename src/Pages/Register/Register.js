import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Register.css";
import googleImg from "../../assets/google.jpg";
// registration form
const Register = () => {
  // import needed things
  const {
    setEmail,
    setPassword,
    error,
    signInWithGoogle,
    user,
    handleUserRegister,
  } = useAuth();
  // redirect to going page
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const history = useHistory();
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    handleUserRegister();
  };
  return (
    // registration form
    <div className="login-form row my-5">
      <h2 className="login-title fw-bold ms-5">Create Account</h2>
      <form>
        <input  className="mt-2 p-2" type="email" onChange={handleEmail} placeholder="your email" />
        <br />
        <input
          type="password" className="mt-2 p-2"
          onChange={handlePassword}
          placeholder="password should be at 6 characters"
        />
        <br />
        <input  className="mt-2 p-2"type="password" placeholder="re-enter password" />
        <br />
        <button onClick={handleRegister} className="btn btn-success w-50 mx-auto my-4 login-btn">
          Register
        </button>
      </form>

      <p>
        Already have an account?<Link to="/login">Log In</Link>
      </p>
      <p>{error}</p>
      <div className="ms-5">---------or---------</div>
      <div className="google-signIn">
        <button onClick={handleGoogleLogin} className="btn google-btn m-2">
          <img src={googleImg} alt="" /> Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
