import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
  const email = useRef();
  const username = useRef();
  const password0 = useRef();
  const password1 = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (password0.current.value !== password1.current.value) {
      password1.current.setCustomValidity("Passwords do not match.");
    } else {
      const user = {
        email: email.current.value,
        username: username.current.value,
        password: password0.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
    // loginCall({username:username.current.value,password:password.current.value}, dispatch)
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Planted</h3>
          <span className="registerDesc">
            Connect with other plant enthusiasts like you!
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              className="registerInput"
              ref={email}
              required
              type="email"
            />
            <input
              placeholder="Username"
              className="registerInput"
              ref={username}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
              ref={password0}
              required
              type="password"
              minLength="6"
            />
            <input
              placeholder="Re-enter Password"
              type="password"
              className="registerInput"
              ref={password1}
              required
              type="password"
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <span className="registerLogin">Already have an account?</span>
            <button className="registerLoginButton">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
