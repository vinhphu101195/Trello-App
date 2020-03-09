import React, { useState } from "react";
import { TaskPopup } from "./TaskPopup";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  task: any;
  title: string;
  id: string;
  index: number;
}

export const ProjectTask: React.FC<Props> = (props: Props) => {
  const [key, setKey] = useState(false);

  const onSetKey = () => {
    setKey(false);
  };
  console.log((props.id));
  

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          className= {snapshot.isDragging? "container-task beActive" : "container-task"}  
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          
        >
          {editTask(props.task.titleTask)}
          <div
            className="project__a"
            onClick={() => {
              setKey(true);
            }}
          >
            <div className="task-button">
              <button className="btn btn-color ">edit</button>
            </div>
          </div>
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
      )}
    </Draggable>
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
