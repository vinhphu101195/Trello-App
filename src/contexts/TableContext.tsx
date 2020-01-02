import React, { createContext, useState, useReducer, useEffect } from "react";
import firebase from "../config/fbConfig";
/* import  {}
 */
interface Props {
  children: React.ReactNode
}

export const TabContext = createContext<object>({});

const TableContextProvider = (props:Props) => {
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

  return (
    <TabContext.Provider value={{data:data}}>
      {props.children}
    </TabContext.Provider>
  );
};

export default TableContextProvider;
