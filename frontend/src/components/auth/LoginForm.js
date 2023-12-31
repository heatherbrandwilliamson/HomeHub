import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import LogoSearch from '../app/LogoSearch';
import "./LoginForm.css";
import LogoImage from "../app/homehub-logo.png";

const LogInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status !== 201) {
      navigate("/login");
    } else {
      let data = await response.json();
      window.localStorage.setItem("token", data.token);
      navigate("/posts");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleForgotPassword = () => {
  //   navigate("/forgot-password");
  // };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="button-container">
        <div>
        <img src={LogoImage} className="logo" alt="Home Hub Logo" />
        <h1 className="h1-title">Login</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <input
              placeholder="Email"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
              required
            />
            <input
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
              required
            />
            <input
              role="submit-button"
              id="submit"
              type="submit"
              value="SUBMIT"
              className="submit-button"
            />
            <button className="sign-up-button" onClick={handleCreateAccount}>
            I DONT HAVE AN ACCOUNT
          </button>
          <h2 className="h2-title">Forgotton password?</h2>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
