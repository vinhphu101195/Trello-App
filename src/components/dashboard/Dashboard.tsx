import React from "react";
import { ProjectColumn } from "../projects/ProjectColumn";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  return (
    <div className="container-dashboard">
      <div className= "container-sub-dashboard">
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
      </div>
    </div>
  );
};
