import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { Navbar } from "./components/navLink/Navbar";
import { Dashboard } from "./components/dashboard/Dashboard";
import { DragDropContext } from "react-beautiful-dnd";
import { useColumnTask } from "./columnProvider/index";

function App() {
  const getDataContext: any = useColumnTask();

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "list") {
      const columnDestination = getDataContext.data[destination.index];
      const columnStart = getDataContext.data[source.index];

      //working with firebase
      getDataContext.dispatch({
        type: "EDIT_TASK",
        tableName: columnStart.id,
        taskNameData: { oder: destination.index }
      });
      getDataContext.dispatch({
        type: "EDIT_TASK",
        tableName: columnDestination.id,
        taskNameData: { oder: source.index }
      });

      return;
    } else {
      const start = source.droppableId;
      const finish = destination.droppableId;
      const arrayOfTask = getDataContext.data.find(
        (ele: any) => ele.id === start
      );
      delete arrayOfTask.oder;
      const variableStart =
        arrayOfTask[Object.keys(arrayOfTask)[source.index + 1]].titleTask;

      getDataContext.dispatch({
        type: "DRAG_HAPPENED_IN_COLUMN",
        arrayOfTask,
        destination,
        start,
        finish,
        draggableId,
        variableStart
      });

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
                return <Dashboard></Dashboard>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </DragDropContext>
  );
}

export default App;
