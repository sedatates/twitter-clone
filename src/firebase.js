
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNP-FV6D61ZjXLBA9Oxm3Ai-sWvS0APCk",
  authDomain: "twitter-clone-ae9b3.firebaseapp.com",
  projectId: "twitter-clone-ae9b3",
  storageBucket: "twitter-clone-ae9b3.appspot.com",
  messagingSenderId: "773449323944",
  appId: "1:773449323944:web:fda75c8df44a4905ca399d",
  measurementId: "G-K4H9XWGG0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
export default db;