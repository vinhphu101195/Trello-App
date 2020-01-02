import React from "react";

interface Props {
  task: string;
}

export const ProjectTask: React.FC<Props> = (props: Props) => {
  return <div className="container-task">{props.task}</div>;
};
