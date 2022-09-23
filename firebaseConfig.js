import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";  
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import "firebase/compat/database";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDkPA8o26HdV6SSXPwPoqxLScdMSi_nRls",
  authDomain: "pantry-pals-8bee2.firebaseapp.com",
  projectId: "pantry-pals-8bee2",
  storageBucket: "pantry-pals-8bee2.appspot.com",
  messagingSenderId: "949655048591",
  appId: "1:949655048591:web:7edaf89424698094fb7bfa"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);  
const db = firebase.firestore();
const auth = firebase.auth();
const rdb = getDatabase(app);
// const rdb = firebase.database();


export { db, auth, rdb };
