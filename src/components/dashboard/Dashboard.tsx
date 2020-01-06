import React, { useContext, useState, useRef } from "react";
import { ProjectColumn } from "../projects/ProjectColumn";
import { TabContext } from "../../contexts/TableContext";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const getDataContext: any = useContext(TabContext);
  const [columnName, setColumnName] = useState<string>();
  const [keyOpen,setKeyOpen] = useState<boolean>(false);

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
    <div className="container-dashboard">
      <div className="container-sub-dashboard">
        {showColumn(getDataContext.data)}

        <div className="container-add-column">
          {/*           if add column the title must diplay none, and add-column-control: display block
           */}{" "}
          <h5 className="column-add-title" onClick= {()=>{setKeyOpen(true)}}>+ Add another list</h5>
          <div className={keyOpen? "add-column-control-open": "add-column-control-close"}>
            <input
              type="text"
              name="name"
              placeholder="Enter list title..."
              required
              value = {columnName}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setColumnName(e.currentTarget.value);
              }}
            ></input>
            <div className="list-add-control row">
              <button
                className="btn btn-color lighten-1 z-depth-0"
                onClick={onCreateColumn}
              >
                {" "}
                Add List
              </button>
              <div className="list-add-control-cancel" onClick= {()=>{setKeyOpen(false)}}> X</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const showColumn = (columns: any) => {
  if (columns.length > 0) {
    return columns.map((element: object, index: number) => {
      return <ProjectColumn information={element} key={index}></ProjectColumn>;
    });
  }
};
