import React from "react";
import { NavLink } from "react-router-dom";
import { useColumnTask } from "../../columnProvider/index";

interface Props {}

export const SignInNav: React.FC<Props> = () => {
  const getDataContext: any = useColumnTask();

  const signOutMethod = () => {
    getDataContext.dispatch({
      type: "SignOut"
    });
  };

  return (
    <ul className="right">
      <li>
        <NavLink to="/signin" onClick={signOutMethod}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-1">
          P C
        </NavLink>
      </li>
    </ul>
  );
};
