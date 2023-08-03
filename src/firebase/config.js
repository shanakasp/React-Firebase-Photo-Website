import firebase from "firebase/compat/app"; // Import firebase from 'firebase/app'
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/analytics"; // Import the analytics module

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZiv-AKTQcoZJqR38vdWlqlfVHtU5Qlw",
  authDomain: "react-firebase-photo-portfolio.firebaseapp.com",
  projectId: "react-firebase-photo-portfolio",
  storageBucket: "react-firebase-photo-portfolio.appspot.com",
  messagingSenderId: "797795108540",
  appId: "1:797795108540:web:78b79d047d0939794872b9",
  measurementId: "G-SXDPE27H9Y",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); // Use firebase.initializeApp
const analytics = firebase.analytics(); // Use firebase.analytics()
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
