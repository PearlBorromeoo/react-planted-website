import "./login.css"
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";
import { Link } from "react-router-dom"

export default function Login() {
  const username = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({username:username.current.value,password:password.current.value}, dispatch)
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Planted</h3>
          <span className="loginDesc">Connect with other plant enthusiasts like you!</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required className="loginInput" ref={username}/>
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}/>
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching?<CircularProgress size="20px"/>:"Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
            <button className="loginRegisterButton">{isFetching?<CircularProgress size="20px"/>:"Create a New Account"}</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}