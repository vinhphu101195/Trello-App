import firebase from "../../config/fbConfig";

export const ProjectReducer = (state: object[], action: any) => {
  switch (action.type) {
    case "ADD_COLUMN":
      firebase
        .firestore()
        .collection("project")
        .doc(action.tableName)
        .set({});

      return [
        /*         ...state,
        {
          id: action.column.tableName
        } */
        state
      ];
    default:
      return state;
  }
};
