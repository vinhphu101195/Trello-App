import React, { useState } from "react";
import { ProjectTask } from "./ProjectTask";
import { useColumnTask } from "../../columnProvider";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  information?: any;
}

export const ProjectColumn: React.FC<Props> = (props: Props) => {
  const [keyOpen, setKeyOpen] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const getDataContext: any = useColumnTask();
  const [keyDropDown, setKeyDropDown] = useState<boolean>(false);

  const title: string = props.information.id;
  const newData = { ...props.information };
  delete newData.id;

  const tasks = Object.values(newData);
  const numberOfTask = Object.keys(newData);

  const onCreateTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getDataContext.dispatch({
      type: "ADD_TASK",
      tableName: title,
      taskNameData: {
        [createID(title)]: {
          titleTask: taskName,
          date: new Date(),
          author: "PC"
        }
      }
    });
    setTaskName("");
    setKeyOpen(false);
  };

  const onDeleteColumn = (e: React.FormEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (ConfirmDelete()) {
      getDataContext.dispatch({
        type: "REMOVE_COLUMN",
        tableName: title
      });
    }
    setKeyDropDown(false);
  };

  return (
    <div className="container-column">
      <div className="column-header">
        <h5 className="column-title">{title}</h5>
        <div
          className="column-header-addTask"
          onClick={() => {
            setKeyDropDown(!keyDropDown);
          }}
        >
          ...
        </div>
        <ul
          className={
            keyDropDown ? "dropdown-content5 show" : "dropdown-content5"
          }
        >
          <li
            onClick={() => {
              setKeyDropDown(false);
              setKeyOpen(true);
            }}
          >
            Add More Task
          </li>
          <li onClick={onDeleteColumn}>Remove Column</li>
        </ul>
        <div
          className={
            keyOpen ? "add-column-control-open" : "add-column-control-close"
          }
        >
          <input
            className="list-name-input"
            type="text"
            placeholder="Enter task..."
            value={taskName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setTaskName(e.currentTarget.value);
            }}
          ></input>
          <div className="list-add-control row">
            <button
              className="btn btn-color lighten-1 z-depth-0"
              onClick={onCreateTask}
            >
              Add List
            </button>
            <div
              className="list-add-control-cancel"
              onClick={() => {
                setTaskName("");
                setKeyOpen(false);
              }}
            >
              X
            </div>
          </div>
        </div>
      </div>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div
            className="column-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <ShowTask
              tasks={tasks}
              numberOfTask={numberOfTask}
              title={title}
            ></ShowTask>
          </div>
        )}
      </Droppable>
    </div>
  );
};

const ShowTask = (props: any) => {
  if (props.tasks.length > 0) {
    return props.tasks.map((element: string, index: number) => {
      return (
        <ProjectTask
          task={element}
          key={props.numberOfTask[index]}
          title={props.title}
          id={props.numberOfTask[index]}
          index={index}
        ></ProjectTask>
      );
    });
  } else {
    return <div></div>;
  }
};

const createID = (title: string): string => {
  return `${title}-${new Date().getTime()}`;
};

const ConfirmDelete = () => {
  var x = window.confirm("Are you sure you want to delete?");
  if (x) return true;
  else return false;
};
