import React, { useState } from "react";
import { useColumnTask } from "../../columnProvider";
import firebase from "../../config/fbConfig";

interface Props {
  infor: any;
  onSetKey: any;
}

export const TaskPopup: React.FC<Props> = (props: Props) => {
  console.log(props);
  const [taskName, setTaskName] = useState<string>(props.infor.task);
  const getDataContext: any = useColumnTask();

  const onDeleteTask = (e: React.FormEvent<HTMLButtonElement>) => {
    if (ConfirmDelete()) {
      getDataContext.dispatch({
        type: "REMOVE_TASK",
        tableName: props.infor.title,
        taskID: props.infor.id
      });
      props.onSetKey();
    }
  };

  const onEditTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getDataContext.dispatch({
      type: "EDIT_TASK",
      tableName: props.infor.title,
      taskNameData: {
        [props.infor.id]: taskName
      }
    });
    props.onSetKey();
  };

  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__title">
          <textarea
            className="popup__title__textarea"
            defaultValue={props.infor.task}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
              setTaskName(e.currentTarget.value);
            }}
          ></textarea>
        </div>
        <div className="popup__information">
          <p className="popup__information__name">Posted by Phu Chau</p>
          <p className="grey-text">04/08/2019</p>
        </div>
        <div className="popup__button">
          <button
            className="btn red lighten-1 z-depth-0  popup__btn__item"
            onClick={onDeleteTask}
          >
            Remove
          </button>
          <button
            className="btn btn-color lighten-1 z-depth-0 popup__btn__item"
            onClick={onEditTask}
          >
            Save
          </button>
        </div>
        <div className="popup__close" onClick={() => props.onSetKey()}>
          &times;
        </div>
      </div>
    </div>
  );
};

const ConfirmDelete = () => {
  var x = window.confirm("Are you sure you want to delete?");
  if (x) return true;
  else return false;
};
