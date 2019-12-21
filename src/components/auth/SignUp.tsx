import React, { useState } from "react";

interface Props {}

interface signUpInformation {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}

export const SignUp: React.FC<Props> = () => {
  const [signUpData, setSignUpData] = useState<signUpInformation | {}>({});

  const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };
  const OnHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(signUpData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={OnHandleSubmit}>
        <h5 className="title">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={onHandleChange} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={onHandleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={onHandleChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={onHandleChange} required />
        </div>

        <div className="input-field">
          <button className="btn btn-color lighten-1 z-depth-0">Login</button>

          <div className="red-text center"></div>
        </div>
      </form>
    </div>
  );
};
