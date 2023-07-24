import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCcIq20_dJqOghD1b1RiCfIHyh7_hU2ogA",
  authDomain: "notestack-7b8ac.firebaseapp.com",
  projectId: "notestack-7b8ac",
  storageBucket: "notestack-7b8ac.appspot.com",
  messagingSenderId: "1029661281511",
  appId: "1:1029661281511:web:27a21eb66b3e6d97622642",
  measurementId: "G-GP2FFJWFYN"
};

const fireDB = firebase.initializeApp(firebaseConfig);
// var fireDB = firebase;
export default fireDB;
