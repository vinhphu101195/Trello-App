import React, { createContext, useState, useReducer, useEffect } from "react";
import firebase from "../config/fbConfig";
/* import  {}
 */
interface Props {
  children: () => JSX.Element | null;
}

export const TabContext = createContext<object>({});

const TableContextProvider: React.FC<Props> = props => {
  /*     const [data,setData] = useReducer<object>();
   */
  const [data, setData] = useState<object>({});

  useEffect(() => {
    firebase
      .firestore()
      .collection("project")
      .onSnapshot(snapshot => {
        const newTask: any = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(newTask);
      });
  }, []);

  console.log(data);

  return (
    <TabContext.Provider value={{}}>
      <props.children></props.children>
    </TabContext.Provider>
  );
};

export default TableContextProvider;
