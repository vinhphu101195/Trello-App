import React, { createContext, useState, useReducer, useEffect } from "react";
import firebase from "../config/fbConfig";
import { ProjectReducer } from "../store/reducers/ProjectReducer";

interface Props {
  children: React.ReactNode;
}

export const TabContext = createContext<object>({});

const TableContextProvider = (props: Props) => {
  const [initialState, setInitialState] = useState<object>({});

  const [data, dispatch] = useReducer<any>(ProjectReducer, initialState);

  useEffect(() => {
    firebase
      .firestore()
      .collection("project")
      .onSnapshot(snapshot => {
        const newTask: any = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setInitialState(newTask);
      });
  }, []);

  return (
    <TabContext.Provider value={{ data: initialState, dispatch }}>
      {props.children}
    </TabContext.Provider>
  );
};

export default TableContextProvider;
