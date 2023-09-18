import React, { useState } from "react";
import Root from "../../routes/root";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css"; // Import the CSS file
import { BiArrowFromLeft } from "react-icons/bi";
import { AiOutlineUser, AiFillCloseCircle } from "react-icons/ai";

import { RiLockPasswordLine, RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake credentials for demonstration
    const fakeUsername = "parent";
    const fakePassword = "1";

    if (username === fakeUsername && password === fakePassword) {
      console.log("Login successful");
      setLoginError(false);
      navigate("/profile"); // Navigate to the profile page
    } else {
      console.log("Login failed");
      setLoginError(true);
    }
  };

  const clearUsername = () => {
    setUsername("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-page">
      <div className="logo">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <div className="login-form-container">
        <h1 className="login-title">
          <span style={{ marginRight: 10 }}>Girish et</span>{" "}
          <BiArrowFromLeft style={{ fontSize: 30 }} />
        </h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label className="login-label">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              Istifadəçi adı
              <AiOutlineUser style={{ marginLeft: 8 }} />
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <input
                type="text"
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {username && (
                <div
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    right: 19,
                    fontSize: 20,
                    bottom: 18,
                  }}
                  onClick={clearUsername}
                >
                  <AiFillCloseCircle />
                </div>
              )}
            </div>
          </label>

          <label className="login-label">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              Şifrə:
              <RiLockPasswordLine style={{ marginLeft: 8 }} />
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: 22,
                  bottom: 18,
                  fontSize: 20,
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
              </div>
            </div>
          </label>
          {loginError && (
            <p className="login-error">Ad və ya Şifrə yanlışdır</p>
          )}
          <button className="login-button" type="submit">
            Daxil ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
