import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyDPxL39w5dGwrVqAsNcmas9tCgUNEovF0U",
  authDomain: "phuchautrello.firebaseapp.com",
  databaseURL: "https://phuchautrello.firebaseio.com",
  projectId: "phuchautrello",
  storageBucket: "phuchautrello.appspot.com",
  messagingSenderId: "159486162387",
  appId: "1:159486162387:web:92a7f45fe6e3db8d362b26",
  measurementId: "G-VQRD5T2G73"
};

firebase.initializeApp(config);


export default firebase;