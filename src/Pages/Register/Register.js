import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Register.css";
import googleImg from "../../assets/google.jpg";
// registration form
const Register = () => {
  // import needed things
  const {
    signInWithGoogle,
    setName,
    setEmail,
    setPassword,
    createUserWithEmailPassword,
    error,
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

  const userEmailHandeler = (e) => {
    setEmail(e.target.value);
  };
  const userPasswordHandeler = (e) => {
    setPassword(e.target.value);
  };
  const userNameHandeler = (e) => {
    setName(e.target.value);
  };
  const userRegistrationHandeler = (e) => {
    e.preventDefault();
    createUserWithEmailPassword();
  };

  return (
    // registration form
    <div className="login-form row my-5">
      <h2 className="login-title fw-bold ms-5">Create Account</h2>
      <form onSubmit={userRegistrationHandeler}>
        <input
          className="mt-2 p-2"
          onBlur={userNameHandeler}
          type="text"
          required
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          className="mt-2 p-2"
          onBlur={userEmailHandeler}
          type="email"
          required
          placeholder="Email"
        />
        <br />
        <input
          className="mt-2 p-2"
          onBlur={userPasswordHandeler}
          type="password"
          required
          placeholder="password should be at 6 characters"
        />
        <br />
        <input
          className="mt-2 p-2"
          type="password"
          placeholder="re-enter password"
        />
        <br />
        <input
          value="Register"
          className="btn btn-success mt-2 w-50 mx-auto my-4 login-btn"
          type="submit"
        />
        <br />
      </form>

      <p>
        Already have an account?<Link to="/login">Log In</Link>
      </p>

      <div className="ms-5">---------or---------</div>
      <div className="google-signIn">
        {/* google form btn */}
        <button onClick={handleGoogleLogin} className="btn google-btn m-2">
          <img src={googleImg} alt="" /> Sign in With Google
        </button>
      </div>
      <p className="text-success fw-bold mt-3">{error}</p>
    </div>
  );
};

export default Register;
