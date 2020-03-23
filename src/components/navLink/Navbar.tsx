import React from "react";
import { Link } from "react-router-dom";
import { SignInNav } from "./SignInNav";
import { SignOutNav } from "./SignOutNav";
import { useColumnTask } from "../../columnProvider/index";

interface Props {}

export const Navbar: React.FC<Props> = () => {
  const getDataContext: any = useColumnTask();

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          PhuChau Trello
        </Link>
        <SignInNav></SignInNav>
        <SignOutNav></SignOutNav>
      </div>
    </nav>
  );
};
