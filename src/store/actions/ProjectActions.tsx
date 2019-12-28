import firebase from '../../config/fbConfig';


export const createTable =(tableName:string)  =>{
    firebase.firestore().collection("project").doc(tableName).set({});
}

export const createTask = (tableName:string,task:object) =>{
    firebase.firestore().collection("project").doc(tableName).set({task}, { merge: true });
}