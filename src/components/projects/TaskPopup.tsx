import React from "react";

interface Props {
  task: string;
}

export const TaskPopup: React.FC<Props> = (props: Props) => {
        console.log("task popup");
        
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__title">
          <textarea className="popup__title__textarea" defaultValue= {props.task}></textarea>
        </div>
        <div className="popup__information">
          <p className="popup__information__name">Posted by Phu Chau</p>
          <p className="grey-text">04/08/2019</p>
        </div>
        <div className="popup__button">
          <button className="btn red lighten-1 z-depth-0  popup__btn__item">
            Remove
          </button>
          <button className="btn btn-color lighten-1 z-depth-0 popup__btn__item">
            Save
          </button>
        </div>
        <a href="" className="popup__close">
          &times;
        </a>
      </div>
    </div>
  );
};
