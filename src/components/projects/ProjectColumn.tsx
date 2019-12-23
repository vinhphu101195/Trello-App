import React from "react";
import { ProjectTask } from "./ProjectTask";

interface Props {}

export const ProjectColumn: React.FC<Props> = () => {
  return (
    <div className="container-column">
      <h5 className="column-title">Example Column</h5>
      <div className="column-list">
        <ProjectTask></ProjectTask>
        <ProjectTask></ProjectTask> <ProjectTask></ProjectTask>{" "}
        <ProjectTask></ProjectTask> <ProjectTask></ProjectTask>{" "}
        <ProjectTask></ProjectTask> <ProjectTask></ProjectTask>{" "}
        <ProjectTask></ProjectTask> <ProjectTask></ProjectTask>{" "}
        <ProjectTask></ProjectTask> <ProjectTask></ProjectTask>
      </div>
    </div>
  );
};
