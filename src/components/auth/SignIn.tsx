import React, { useState } from "react";

export const SignIn: React.FC = () => {
  const [logInData, setLogInData] = useState< {email:string,password:string}| {}>({});

  const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLogInData({
      ...logInData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };
  const OnHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(logInData);
  };
  return (
    <div className="container">
      <form className="form" onSubmit ={OnHandleSubmit}>
        <h5 className="title">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required onChange={onHandleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required onChange={onHandleChange}/>
        </div>
        <div className="input-field">
          <button className="btn btn-color lighten-1 z-depth-0">Login</button>

          <div className="red-text center"></div>
        </div>
      </form>
    </div>
  );
};
