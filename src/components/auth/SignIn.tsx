import React, { useState } from "react";
import { useColumnTask } from "../../columnProvider/index";

export const SignIn: React.FC = () => {
  const getDataContext: any = useColumnTask();

  const [logInData, setLogInData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLogInData({
      ...logInData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const OnHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getDataContext.dispatch({
      type: "SignIn",
      email: logInData.email,
      password: logInData.password
    });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={OnHandleSubmit}>
        <h5 className="title">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required onChange={onHandleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={onHandleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn btn-color lighten-1 z-depth-0">Login</button>
          <div className="red-text center"></div>
          <div className="input-field">
            <button className="btn fb-login z-depth-0">
              Login with Facebook
            </button>
            <button className="btn google-login  z-depth-0">
              Login with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
