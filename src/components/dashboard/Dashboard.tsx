import React from "react";
import { ProjectColumn } from "../projects/ProjectColumn";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  return (
    <div className="container-dashboard">
      <div className="container-sub-dashboard">
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <div className="container-add-column">
          <h5 className="column-add-title">+ Add another list</h5>
        </div>
      </div>
    </div>
  );
};
