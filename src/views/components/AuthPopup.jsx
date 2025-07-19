import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { createUser, createSession } from "../../data/api";

const AuthPopup = () => {
  const [login, setLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (login) {
      const values = Object.fromEntries(formData.entries())
      console.log(values)
      createSession(values);
    } else {
      const values = Object.fromEntries(formData.entries())
      createUser(values);
    }
  };
  return (
    <div className="popup-bg">
      <div className="popup">
        <form id="user-form" onSubmit={(e) => formSubmit(e)}>
          <div className="head">
            <h1 className="logo">MVManage</h1>
            <h2 className="login">Start using service after authorization</h2>
          </div>

          {login ? (
            <>
              <div className="input-group">
                <input
                  required
                  name="email"
                  className="form-input"
                  type="email"
                  placeholder=""
                />
                <label className="form-label">Email</label>
              </div>
              <div className="input-group">
                <input
                  required
                  name="password"
                  className="form-input"
                  minLength={8}
                  type={showPass ? "text" : "password"}
                  placeholder=""
                />
                <label className="form-label">Password</label>
                <p className="pass-eye" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="input-group">
                <input
                  required
                  name="email"
                  className="form-input"
                  type="email"
                  placeholder=""
                />
                <label className="form-label">Email</label>
              </div>
              <div className="input-group">
                <input
                  required
                  minLength={2}
                  pattern="[a-zA-Z]+"
                  title="Name can not contain any numbers or symbols"
                  className="form-input"
                  name="name"
                  type="text"
                  placeholder=""
                />
                <label className="form-label">Name</label>
              </div>
              <div className="input-group">
                <input
                  required
                  name="password"
                  minLength={8}
                  className="form-input"
                  type={showPass ? "text" : "password"}
                  placeholder=""
                />
                <label className="form-label">Password</label>
                <p className="pass-eye" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </p>
              </div>
              <div className="input-group">
                <input
                  required
                  minLength={8}
                  name="confirmPassword"
                  className="form-input"
                  type={showPass1 ? "text" : "password"}
                  placeholder=""
                />
                <label className="form-label">Confirm password</label>
                <p
                  className="pass-eye"
                  onClick={() => setShowPass1(!showPass1)}
                >
                  {showPass1 ? <FiEyeOff /> : <FiEye />}
                </p>
              </div>
            </>
          )}

          <h2 className="login">
            {login ? "Do not have an account?" : "Already have an account?"}
            <p onClick={() => setLogin(!login)}>
              {" "}
              {login ? "Register" : "Sign In"}
            </p>
          </h2>
          <button type="submit">{login ? "Sign up" : "Register"}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPopup;
