import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjHXoKDqmopCsI1mFhNyZONOhl4CuwUjA",
  authDomain: "faceb-a1c35.firebaseapp.com",
  projectId: "faceb-a1c35",
  storageBucket: "faceb-a1c35.appspot.com",
  messagingSenderId: "823324670089",
  appId: "1:823324670089:web:2a96ad71a9a75601506e58",
  measurementId: "G-PPL5GC3KFF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;
