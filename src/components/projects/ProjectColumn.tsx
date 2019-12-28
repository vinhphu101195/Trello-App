import React from "react";
import { ProjectTask } from "./ProjectTask";

interface Props {}

export const ProjectColumn: React.FC<Props> = () => {
  return (
    <div className="container-column">
      <div className="column-header">
        <h5 className="column-title">Example Column</h5>
        <div className="column-header-addTask">+</div>
        <span className="tooltiptext">Add more task</span>

        <div className="add-task-control">
          <input
            className="list-name-input"
            type="text"
            name="name"
            placeholder="Enter task..."
            dir="auto"
          ></input>
          <div className="list-add-control row">
            <button className="btn btn-color lighten-1 z-depth-0">
              {" "}
              Add List
            </button>
            <div className="list-add-control-cancel"> X</div>
          </div>
        </div>
      </div>
      <div className="column-list">
        <ProjectTask></ProjectTask>
      </div>
    </div>
  );
};
