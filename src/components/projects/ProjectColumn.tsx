import React, { useState,useContext } from "react";
import { ProjectTask } from "./ProjectTask";
import { TabContext } from "../../contexts/TableContext";


interface Props {
  information?: any;
}

export const ProjectColumn: React.FC<Props> = (props: Props) => {
  const [keyOpen, setKeyOpen] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const getDataContext: any = useContext(TabContext);

  const title: string = props.information.id;
  const newData = { ...props.information };
  delete newData.id;
  const tasks = Object.values(newData);
  const numberOfTasks:any = tasks.length;

  const onCreateTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getDataContext.dispatch({
      type: "ADD_TASK",
      tableName: title,
      taskNameData: {
        [numberOfTasks]: taskName
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
            <button className="btn btn-color lighten-1 z-depth-0"   onClick={onCreateTask} >
              {" "}
              Add List
            </button>
            <div
              className="list-add-control-cancel"
              onClick={() => {
                setKeyOpen(false);
              }}
            >
              {" "}
              X
            </div>
          </div>
        </div>
      </div>
      <div className="column-list">{showTask(tasks)}</div>
    </div>
  );
};

const showTask = (tasks: any) => {
  if (tasks.length > 0) {
    return tasks.map((element: string, index: number) => {
      return <ProjectTask task={element} key={index}></ProjectTask>;
    });
  }
};
