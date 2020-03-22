import React from "react";
import { NavLink } from "react-router-dom";
import { useColumnTask } from "../../columnProvider/index";

interface Props {}

export const SignInNav: React.FC<Props> = () => {
  const getDataContext: any = useColumnTask();

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Plan</NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          onClick={getDataContext.dispatch({
            type: "SinOut"
          })}
        >
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
