import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const {error,
    signInWithGoogle,
    user,
    handleUserRegister,
    
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    handleUserRegister(email, password);
  };
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form >
          <input type="email"onChange={handleEmail}  placeholder="your email" />
          <br />
          <input
            type="password"onChange={handlePassword}
            
            placeholder="password should be at 6 characters"
          /><br/>
          <input
            type="password"
           
            placeholder="re-enter password"
          />
          <br />
          <button
                  onClick={handleRegister}
                  className="btn btn-primary me-1"
                >
                  Register
                </button>
        </form>
        <p>{error}</p>
        <p>
         Already have an account?<Link to="/login">Log In</Link>
        </p>
        <div>---------or---------</div>
        <button onClick={ signInWithGoogle} className="btn btn-warning m-2">Sign in With Google</button>
      </div>
    </div>
  );
};

export default Register;
