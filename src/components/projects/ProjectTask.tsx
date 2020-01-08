import React from "react";

interface Props {
  task: string;
}

export const ProjectTask: React.FC<Props> = (props: Props) => {
  const editTask = (task: string) => {
    if (task.length > 12) {
      const newTask = task.slice(0, 12) + "...";
      return newTask;
    } else {
      return task;
    }
  };

  return (
    <div className="container-task">
      {editTask(props.task)}
      <div className="task-button">
        <button className="btn btn-color ">edit</button>
      </div>
    </div>
  );
};
