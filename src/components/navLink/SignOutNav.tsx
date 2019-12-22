import React from "react";
import { NavLink } from "react-router-dom";


interface Props {}

export const SignOutNav: React.FC<Props> = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};
