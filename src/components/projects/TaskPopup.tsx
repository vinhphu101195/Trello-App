import React, { useState } from "react";
import { useColumnTask } from "../../columnProvider";
import moment from "moment";

interface Props {
  infor: any;
  onSetKey: any;
}

export const TaskPopup: React.FC<Props> = (props: Props) => {
  const [taskName, setTaskName] = useState<string>(props.infor.task.titleTask);
  const getDataContext: any = useColumnTask();

  const onDeleteTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
        [props.infor.id]: {
          titleTask: taskName,
          date: new Date(),
          author: "PC"
        }
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
            defaultValue={props.infor.task.titleTask}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
              setTaskName(e.currentTarget.value);
            }}
          ></textarea>
        </div>
        <div className="popup__information">
          <p className="popup__information__name">
            Posted by {props.infor.task.author}
          </p>
          <p className="grey-text">
            New update in {moment(props.infor.task.date.toDate()).calendar()}
          </p>
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
