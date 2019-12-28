import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import {Navbar} from "./components/navLink/Navbar";
import {Dashboard} from './components/dashboard/Dashboard';
import firebase from './config/fbConfig';
import {createTask} from './store/actions/ProjectActions';


function App() {

/* firebase.firestore().collection("project").doc("Must Do Column").set({c: "eat"}, { merge: true });
 */

 // check the save data, want to have an array 
const test = {
  id2: "outstudy"
}

createTask("Must Do Column",test);

firebase.firestore().collection("project").onSnapshot((snapshot)=>{
  const newTask = snapshot.docs.map(doc=>({
    id:doc.id,
    ...doc.data()
  }))
  console.log(newTask);
  
})



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
