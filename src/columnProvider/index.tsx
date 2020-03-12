import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext
} from "react";
import firebase from "../config/fbConfig";
import { ProjectReducer } from "../store/reducers/ProjectReducer";

interface Props {
  children: React.ReactNode;
}

export const TabContext = createContext<object>({});

const TableContextProvider = (props: Props) => {
  const [initialState, setInitialState] = useState<object>({});

  // check again with data, anschyronous
  const [data, dispatch] = useReducer<any>(ProjectReducer, initialState);

  useEffect(() => {
    firebase
      .firestore()
      .collection("project")
      .orderBy("oder")
      .onSnapshot(snapshot => {
        const newTask: any = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(newTask);
        setInitialState(newTask);
      });
  }, []);

  return (
    <TabContext.Provider value={{ data: initialState, dispatch }}>
      {props.children}
    </TabContext.Provider>
  );
};

export const useColumnTask = () => {
  return useContext(TabContext);
};

export default TableContextProvider;
