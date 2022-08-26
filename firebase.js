
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDb5yYxV278lstbYo2iclHAWUfK4IYcUbI",
  authDomain: "uber-eat-clone-rn-68a79.firebaseapp.com",
  projectId: "uber-eat-clone-rn-68a79",
  storageBucket: "uber-eat-clone-rn-68a79.appspot.com",
  messagingSenderId: "740356134138",
  appId: "1:740356134138:web:5e59f793c6f182709aa543",
  measurementId: "G-5GNQSGD5Y7"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;