import firebase from "../../config/fbConfig";

export const ProjectReducer = (state: object[], action: any) => {
  switch (action.type) {
    case "ADD_COLUMN":
      try {
        firebase
          .firestore()
          .collection("project")
          .doc(action.tableName)
          .set({});
      } catch (error) {
        console.log(error);
      }
      return [state];
    case "ADD_TASK":
      try {
        firebase
          .firestore()
          .collection("project")
          .doc(action.tableName)
          .set(action.taskNameData, { merge: true });
      } catch (error) {
        console.log(error);
      }
      return [state];
    case "EDIT_TASK":
      try {
        firebase
          .firestore()
          .collection("project")
          .doc(action.tableName)
          .update(action.taskNameData);
      } catch (error) {
        console.log(error);
      }
      return [state];
    case "REMOVE_TASK":
      try {
        firebase
          .firestore()
          .collection("project")
          .doc(action.tableName)
          .update({ [action.taskID]: firebase.firestore.FieldValue.delete() });
      } catch (error) {
        console.log(error);
      }
      return [state];
    default:
      return state;
  }
};
