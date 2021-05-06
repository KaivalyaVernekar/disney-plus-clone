import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuzcL0UlnRRAz8W5PgwGDslR9I7PPIMTM",
  authDomain: "disney-plus-clone-a084b.firebaseapp.com",
  projectId: "disney-plus-clone-a084b",
  storageBucket: "disney-plus-clone-a084b.appspot.com",
  messagingSenderId: "625628384102",
  appId: "1:625628384102:web:6fdabfea758dba79e296a7",
  measurementId: "G-BHVQHL2BD3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
