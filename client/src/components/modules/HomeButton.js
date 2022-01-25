import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "../modules/HomeButton.css";
import Login from "../modules/Login.js";
import Image from "/Users/michellechan/Downloads/leaplog logo.png";

const HomeButton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="Container">
      <div className="home">
      <button className="Home-button">
        <Link to="/">
        <img src={Image}
        width="60%">
        </img>
        </Link>
      </button>
      </div>

      <div className="login-button">
        <Login userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default HomeButton;
