import React, { useState } from "react";
import { TaskPopup } from "./TaskPopup";

interface Props {
  task: string;
  title: string;
  id: string;
}

export const ProjectTask: React.FC<Props> = (props: Props) => {
  const [key, setKey] = useState(false);

  const onSetKey = () => {
    setKey(false);
  };

  return (
    <div className="container-task">
      {editTask(props.task)}
      <a
        href="#popup"
        className="project__a"
        onClick={() => {
          setKey(true);
        }}
      >
        <div className="task-button">
          <button className="btn btn-color ">edit</button>
        </div>
      </a>
      {key ? (
        <TaskPopup
          infor={props}
          onSetKey={() => {
            onSetKey();
          }}
        ></TaskPopup>
      ) : (
        ""
      )}
    </div>
  );
};

const editTask = (task: string) => {
  if (task.length > 14) {
    const newTask = task.slice(0, 14) + "...";
    return newTask;
  } else {
    return task;
  }
};
