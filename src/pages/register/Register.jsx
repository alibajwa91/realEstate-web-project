import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginleft">
          <h1 className="loginLogo">AMB Realtors</h1>

          <span className="LoginDesc">
            We Provides Luxury Life Style To Everyone
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="UserName" className="loginUserName" />
            <input placeholder="Email" className="loginEmail" />
            <input placeholder="Password" className="loginPassword" />
            <input placeholder="Re-type Password" className="loginPassword" />
            <Link to="/">
              <button className="RegisterBtn">Sign up</button>
            </Link>
            <span className="alreadyRegister">
              Do you already have an Account?
            </span>
            <Link to="/loginpage">
              <button className="loginBtn">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
