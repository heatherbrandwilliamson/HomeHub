import React, { useState } from "react";
import "./SignUpForm.css";
import LogoImage from "../app/homehub-logo.png";

const SignUpForm = ({ navigate }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    if (file) {
      formData.append("image", file);
    }

    fetch("/users", {
      method: "post",
      body: formData,
    }).then((response) => {
      if (response.status === 201) {
        console.log("user created...");
        navigate("/login");
      } else {
        navigate("/signup");
      }
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="button-container">
      <div>
      <img src={LogoImage} className="logo" alt="Home Hub Logo" />
      <h1 className="h1-title">Sign up</h1>
      <div className="form-container">
        <form
          className="form-signup"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            placeholder="Username"
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="input"
            required
          />
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
          Add a profile photo &nbsp;
          <input id="photo" type="file" onChange={handleFileChange} /><br></br>
          <span className="no-file-text">
        {file ? file.name : "No file chosen"}
      </span>
          <br />
          <br />
          <input
            role="submit-button"
            id="submit"
            type="submit"
            value="Submit"
            className="submit-button"
          />
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
