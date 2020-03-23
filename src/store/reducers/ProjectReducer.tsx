import firebase from "../../config/fbConfig";

export const ProjectReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_COLUMN":
      try {
        firebase
          .firestore()
          .collection("project")
          .doc(action.tableName)
          .set(action.oder);
      } catch (error) {
        console.log(error);
      }
      return [state];
    case "REMOVE_COLUMN":
      try {
        firebase
          .firestore()
          .collection("project")
          .doc(action.tableName)
          .delete();
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
    case "DRAG_HAPPENED_IN_COLUMN":
      if (action.start === action.finish) {
        const variableEnd =
          action.arrayOfTask[
            Object.keys(action.arrayOfTask)[action.destination.index + 1]
          ].titleTask;
        try {
          firebase
            .firestore()
            .collection("project")
            .doc(action.finish)
            .update({
              [action.draggableId]: {
                titleTask: variableEnd,
                date: new Date(),
                author: "PC"
              }
            });
          firebase
            .firestore()
            .collection("project")
            .doc(action.finish)
            .update({
              [Object.keys(action.arrayOfTask)[action.destination.index + 1]]: {
                titleTask: action.variableStart,
                date: new Date(),
                author: "PC"
              }
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          firebase
            .firestore()
            .collection("project")
            .doc(action.start)
            .update({
              [action.draggableId]: firebase.firestore.FieldValue.delete()
            });
          firebase
            .firestore()
            .collection("project")
            .doc(action.finish)
            .set(
              {
                [action.draggableId]: {
                  titleTask: action.variableStart,
                  date: new Date(),
                  author: "PC"
                }
              },
              { merge: true }
            );
        } catch (error) {
          console.log(error);
        }
      }
      return state;
    case "SignIn":
      firebase
        .auth()
        .signInWithEmailAndPassword(action.email, action.password)
        .then(() => {
          console.log("sign in success");
          state = firebase.auth().currentUser;
        })
        .catch(err => console.log(err));

      return state;

    case "SignOut":
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("sign out success");
          state = firebase.auth().currentUser;
        });
      return state;
    default:
      return state;
  }
};
