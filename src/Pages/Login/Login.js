import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";
import googleImg from "../../assets/google.jpg";
// login form
const Login = () => {
  const {setEmail,setPassword, error, signInWithGoogle,  handleUserLogin } = useAuth();
  // needed things imported
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const history = useHistory();
  // google login
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

  const handleLogin = () => {
    handleUserLogin();
  };

  return (
    // login form
    <div className="login-form row my-5">
      <h2 className="login-title fw-bold ms-5">Login</h2>
      <form className="">
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
        <button
          onClick={handleLogin}
          className="btn btn-success w-50 mx-auto my-4 login-btn"
        >
          Login
        </button>
      </form>
      <p>
        New to Psychare?<Link to="/register">Create Account</Link>
      </p>
      {/* catch error */}
      <p> {error}</p>
      <div className="ms-5">---------or---------</div>
      <div className="google-signIn">
        {/* google sign in */}
        <button onClick={handleGoogleLogin} className="btn google-btn m-2">
          <img src={googleImg} alt="" /> Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
