// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCH8o41nvRtiVPQZo4tdfCsmCByzPZYohc",
  authDomain: "messaging-app-ca9c8.firebaseapp.com",
  projectId: "messaging-app-ca9c8",
  storageBucket: "messaging-app-ca9c8.appspot.com",
  messagingSenderId: "125438570916",
  appId: "1:125438570916:web:99634b823ab01550701131",
  measurementId: "G-NNHB30X219",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
