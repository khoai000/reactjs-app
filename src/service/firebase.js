// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChaXUJntg5vGdtt7VrlVvyMKevCz7goiM",
  authDomain: "react-app-d287a.firebaseapp.com",
  projectId: "react-app-d287a",
  storageBucket: "react-app-d287a.appspot.com",
  messagingSenderId: "188394961765",
  appId: "1:188394961765:web:442d7877e924b4d3babf8c",
  measurementId: "G-7VQEN6R5R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
