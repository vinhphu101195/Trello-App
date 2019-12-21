import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";

function App() {
  const name: string = "hello";
  console.log(name);

  return (
    <BrowserRouter>
      <div className="App">
        <SignIn />
      </div>
    </BrowserRouter>
  );
}

export default App;
