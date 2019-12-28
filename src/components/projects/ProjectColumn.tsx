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
      </div>
      <div className="column-list">
        <ProjectTask></ProjectTask>
      </div>
    </div>
  );
};
