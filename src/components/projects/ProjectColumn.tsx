import React, { useState } from "react";
import { ProjectTask } from "./ProjectTask";
import { useColumnTask } from "../../columnProvider";

interface Props {
  information?: any;
}

export const ProjectColumn: React.FC<Props> = (props: Props) => {
  const [keyOpen, setKeyOpen] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const getDataContext: any = useColumnTask();

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
        [createID(numberOfTask)]: taskName
      }
    });
    setTaskName("");
    setKeyOpen(false);
  };

  return (
    <div className="container-column">
      <div className="column-header">
        <h5 className="column-title">{title}</h5>
        <div
          className="column-header-addTask"
          onClick={() => {
            setKeyOpen(true);
          }}
        >
          +
        </div>
        <span className="tooltiptext">Add more task</span>

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
                setKeyOpen(false);
              }}
            >
              X
            </div>
          </div>
        </div>
      </div>
      <div className="column-list">
        <ShowTask tasks={tasks}></ShowTask>
      </div>
    </div>
  );
};

const ShowTask = (props: any) => {
  if (props.tasks.length > 0) {
    return props.tasks.map((element: string, index: number) => {
      return <ProjectTask task={element} key={index}></ProjectTask>;
    });
  } else {
    return <div></div>;
  }
};

const createID = (numberOfTask: Array<string>) => {
  if (numberOfTask.length === 0) {
    return 0;
  } else {
    return Number(numberOfTask[numberOfTask.length - 1]) + 1;
  }
};
