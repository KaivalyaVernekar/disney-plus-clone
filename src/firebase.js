import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLlebxo_LqaOgf3RwlNyY6NSWHS4yOqwc",
  authDomain: "disney-plus-clone-3ce7e.firebaseapp.com",
  projectId: "disney-plus-clone-3ce7e",
  storageBucket: "disney-plus-clone-3ce7e.appspot.com",
  messagingSenderId: "480696956158",
  appId: "1:480696956158:web:e543f84cbb18f8329061af",
  measurementId: "G-YB5HCE3056",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
