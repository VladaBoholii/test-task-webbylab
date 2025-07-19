import React, { useState } from "react";

const AuthPopup = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="popup-bg">
      <div className="popup">
        {login ? (
          <form id="add-form">
            <div className="main-text">
              <h1 className="logo">MVManage</h1>
            </div>
            <div className="input-group">
              <input className="form-input" type="email" placeholder="" />
              <label className="form-label">Email</label>
            </div>
            <div className="input-group">
              <input className="form-input" type="text" placeholder="" />
              <label className="form-label">Name</label>
            </div>
            <div className="input-group">
              <input className="form-input" type="password" placeholder="" />
              <label className="form-label">Password</label>
            </div>
            <div className="input-group">
              <input className="form-input" type="password" placeholder="" />
              <label className="form-label">Confirm password</label>
            </div>
          </form>
        ) : (
          <form id="add-form">
            <div className="input-group">
              <input className="form-input" type="email" placeholder="" />
              <label className="form-label">Email</label>
            </div>
            <div className="input-group">
              <input className="form-input" type="password" placeholder="" />
              <label className="form-label">Password</label>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPopup;
