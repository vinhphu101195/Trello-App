import React, { useState } from "react";
import { ProjectColumn } from "../projects/ProjectColumn";
import { useColumnTask } from "../../columnProvider";
import { Droppable } from "react-beautiful-dnd";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const getDataContext: any = useColumnTask();
  const [columnName, setColumnName] = useState<string>("");
  const [keyOpen, setKeyOpen] = useState<boolean>(false);

  const onCreateColumn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getDataContext.dispatch({
      type: "ADD_COLUMN",
      tableName: columnName
    });
    setColumnName("");
    setKeyOpen(false);
  };

  return (
    <Droppable droppableId="all-list" direction="horizontal" type="list">
      {(provided, snapshot) => (
        <div
          className="container-dashboard"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="container-sub-dashboard">
            <ShowColumn columns={getDataContext.data}></ShowColumn>
            <div className="container-add-column">
              <h5
                className="column-add-title"
                onClick={() => {
                  setKeyOpen(true);
                }}
              >
                + Add another list
              </h5>
              <div
                className={
                  keyOpen
                    ? "add-column-control-open"
                    : "add-column-control-close"
                }
              >
                <input
                  type="text"
                  placeholder="Enter list title..."
                  required
                  value={columnName}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setColumnName(e.currentTarget.value);
                  }}
                  className="input-table"
                ></input>
                <div className="list-add-control row">
                  <button
                    className="btn btn-color lighten-1 z-depth-0"
                    onClick={onCreateColumn}
                  >
                    Add List
                  </button>
                  <div
                    className="list-add-control-cancel"
                    onClick={() => {
                      setColumnName("");
                      setKeyOpen(false);
                    }}
                  >
                    {" "}
                    X
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};

const ShowColumn = (props: any) => {
  if (props.columns.length > 0) {
    return props.columns.map((element: object, index: number) => {
      return <ProjectColumn information={element} key={index} index={index}></ProjectColumn>;
    });
  } else {
    return <div></div>;
  }
};
