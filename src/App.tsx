import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { Navbar } from "./components/navLink/Navbar";
import { Dashboard } from "./components/dashboard/Dashboard";
import TableContextProvider from "./columnProvider";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const onDragEnd = (result: any) => {
    const { destination, source, draggbleId } = result;
    if(!destination){
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp} />
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <TableContextProvider>
                    <Dashboard></Dashboard>
                  </TableContextProvider>
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </DragDropContext>
  );
}

export default App;
