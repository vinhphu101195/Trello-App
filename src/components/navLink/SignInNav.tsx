import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

export const SignInNav: React.FC<Props> = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Plan</NavLink>
      </li>
      <li>
        <NavLink to ='/'>Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-1">
          P C
        </NavLink>
      </li>
    </ul>
  );
};
