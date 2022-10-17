import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCtUmV7zoRrFd7o-hYDrWzeK9xR-1OAs1s",
  authDomain: "netflix-clone-94057.firebaseapp.com",
  projectId: "netflix-clone-94057",
  storageBucket: "netflix-clone-94057.appspot.com",
  messagingSenderId: "1021283191555",
  appId: "1:1021283191555:web:7aaa5474796e5b2023b736",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
