import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import {Navbar} from "./components/navLink/Navbar";
import {Dashboard} from './components/dashboard/Dashboard';
import firebase from './config/fbConfig';
import {createTask} from './store/actions/ProjectActions';


function App() {

//get data
/* firebase.firestore().collection("project").onSnapshot((snapshot)=>{
  const newTask:any = snapshot.docs.map(doc=>({
    id:doc.id,
    ...doc.data()
  }))
  console.log(Object.values(newTask[0].tasks));
}) */

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
