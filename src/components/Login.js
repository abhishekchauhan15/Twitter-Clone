import React from "react";
// import "../styles/login.css";
// import firebase from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";
import { auth, provider } from "../firebase";
import  sidePhoto from "./download.png";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [user] = useAuthState(auth);

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="main-container">
        <div className="left">
        <img src ={sidePhoto} alt="photo" className="photo" />
        </div>
        <div className="right">
          <div className="join-box">
            <span className="icon bird"></span>
            <h1>See what's happening in the world right now</h1>
            <h2>Join Twitter today.</h2>
            <div className="signup-login">
              <button onClick={signIn} id="login">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <a href="#">About</a>
          <a href="#">Help Center</a>
          <a href="#">Blog</a>
          <a href="#">Status</a>
          <a href="#">Jobs</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">Ads info</a>
          <a href="#">Brand</a>
          <a href="#">Apps</a>
          <a href="#">Advertise</a>
          <a href="#">Marketing</a>
          <a href="#">Businesses</a>
          <a href="#">Developers</a>
          <a href="#">Directory</a>
          <a href="#">Settings</a>
          <p>© 2018 Twitter</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
