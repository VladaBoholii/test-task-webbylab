import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { createUser, createSession } from "../../data/api";
import toast, { Toaster } from "react-hot-toast";

const AuthPopup = () => {
  const [login, setLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (login) {
      const values = Object.fromEntries(formData.entries());
      const res = await createSession(values);
      if (res == 1) {
        toast("Success");
        window.location.reload();
      } else toast(res);
    } else {
      const values = Object.fromEntries(formData.entries());
      const res = await createUser(values);
      if (res == 1) {
        toast("Success");
        window.location.reload();
      } else toast(res);
    }
  };
  return (
    <div className="popup-bg">
      <Toaster />
      <div className="popup">
        <form id="user-form" onSubmit={(e) => formSubmit(e)}>
          <div className="head">
            <h1 className="logo">MVManage</h1>
            <h2 className="login-info">
              Start using service after authorization
            </h2>
          </div>

          {login ? (
            <div style={{ gap: "1rem", display: "grid" }}>
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
            </div>
          ) : (
            <div style={{ gap: "1rem", display: "grid" }}>
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
            </div>
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
