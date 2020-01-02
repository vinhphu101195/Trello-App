import React, { useContext } from "react";
import { ProjectColumn } from "../projects/ProjectColumn";
import { TabContext } from "../../contexts/TableContext";

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const getDataContext: any = useContext(TabContext);

  return (
    <div className="container-dashboard">
      <div className="container-sub-dashboard">
        {/*        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn>
        <ProjectColumn></ProjectColumn> */}
        {showColumn(getDataContext.data)}

        <div className="container-add-column">
          {/*           if add column the title must diplay none, and add-column-control: display block
           */}{" "}
          <h5 className="column-add-title">+ Add another list</h5>
          <div className="add-column-control">
            <input
              type="text"
              name="name"
              placeholder="Enter list title..."
              dir="auto"
            ></input>
            <div className="list-add-control row">
              <button className="btn btn-color lighten-1 z-depth-0">
                {" "}
                Add List
              </button>
              <div className="list-add-control-cancel"> X</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const showColumn = (columns: any) => {
  if (columns.length > 0) {
    return columns.map((element: object,index:number) => {
      return <ProjectColumn information={element} key={index}></ProjectColumn>;
    });
  }
};
