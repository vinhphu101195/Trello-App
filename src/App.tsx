import React from 'react';
import {SignIn} from "./components/auth/SignIn";
import {SignUp} from"./components/auth/SignUp";

function App() {
   const name: string = "hello";
   console.log(name);
   
  return (
    <div className="App">
      <SignUp/>
    </div>
  );
}

export default App;
