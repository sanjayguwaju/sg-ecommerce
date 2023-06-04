// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import firebase from './firebase';
// const storageRef = firebase.storage().ref();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABmew2oDBqsTsDIFeFnv2FoNXyQert5-c",
  authDomain: "superstore-a6900.firebaseapp.com",
  projectId: "superstore-a6900",
  storageBucket: "superstore-a6900.appspot.com",
  messagingSenderId: "698934921231",
  appId: "1:698934921231:web:65fee022ef6b553c037b7a",
  measurementId: "G-FQZH5X5H8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
