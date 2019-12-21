import React from "react";

interface Props {}

export const SignUp: React.FC<Props> = () => {
  return (
    <div className="container">
      <form className="form">
        <h5 className="title">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="input-field">
          <button className="btn btn-color lighten-1 z-depth-0">Login</button>

          <div className="red-text center"></div>
        </div>
      </form>
    </div>
  );
};
