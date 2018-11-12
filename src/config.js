import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAnD7-vO4GTohC_TtffWjejnHhx5Eqvh7w",
  authDomain: "job-board-d03be.firebaseapp.com",
  databaseURL: "https://job-board-d03be.firebaseio.com",
  projectId: "job-board-d03be",
  storageBucket: "",
  messagingSenderId: "437053531291",
  timestampsInSnapshots: true
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
