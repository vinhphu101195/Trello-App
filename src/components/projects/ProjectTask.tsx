import React from "react";
import { TaskPopup } from "./TaskPopup";

interface Props {
  task: string;
}

export const ProjectTask: React.FC<Props> = (props: Props) => {
  const editTask = (task: string) => {
    if (task.length > 14) {
      const newTask = task.slice(0, 14) + "...";
      return newTask;
    } else {
      return task;
    }
  };

  return (
    <div className="container-task">
      {editTask(props.task)}
      <a href="#popup" className="project__a">
        <div className="task-button">
          <button className="btn btn-color ">edit</button>
        </div>
      </a>
      <TaskPopup></TaskPopup>
    </div>
  );
};
