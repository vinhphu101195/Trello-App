import React from "react";
import "./authCss.css";

export const SignIn: React.FC = () => {
  return (
    <div className="container">
      <form className="form">
        <h5 className="title">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-field">
          <button className="btn btn-color lighten-1 z-depth-0">Login</button>

          <div className="red-text center"></div>
        </div>
      </form>
    </div>
  );
};
