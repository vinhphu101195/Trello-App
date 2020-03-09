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
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = source.droppableId;
    const finish = destination.droppableId;
    const arrayOfTask = getDataContext.data.find(
      (ele: any) => ele.id === start
    );
    const variableStart =
      arrayOfTask[Object.keys(arrayOfTask)[source.index + 1]].titleTask;
    //same column
    if (start === finish) {
      const variableEnd =
        arrayOfTask[Object.keys(arrayOfTask)[destination.index + 1]].titleTask;
      getDataContext.dispatch({
        type: "EDIT_TASK",
        tableName: finish,
        taskNameData: {
          [draggableId]: {
            titleTask: variableEnd,
            date: new Date(),
            author: "PC"
          }
        }
      });
      getDataContext.dispatch({
        type: "EDIT_TASK",
        tableName: finish,
        taskNameData: {
          [Object.keys(arrayOfTask)[destination.index + 1]]: {
            titleTask: variableStart,
            date: new Date(),
            author: "PC"
          }
        }
      });
      return;
    }

    // different column
    getDataContext.dispatch({
      type: "REMOVE_TASK",
      tableName: start,
      taskID: draggableId
    });

    getDataContext.dispatch({
      type: "ADD_TASK",
      tableName: finish,
/*       taskNameData: {
        [`${finish}-${new Date().getTime()}`]: {
          titleTask: variableStart,
          date: new Date(),
          author: "PC"
        }
      } */
      taskNameData: {
        [draggableId]: {
          titleTask: variableStart,
          date: new Date(),
          author: "PC"
        }
      }
    });
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
