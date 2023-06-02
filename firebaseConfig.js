// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNFFXLJpUl3ecclR9VJVP-Tp0WtyO6nDU",
  authDomain: "campusconnect-1b13c.firebaseapp.com",
  databaseURL: "https://campusconnect-1b13c-default-rtdb.firebaseio.com",
  projectId: "campusconnect-1b13c",
  storageBucket: "campusconnect-1b13c.appspot.com",
  messagingSenderId: "409266041204",
  appId: "1:409266041204:web:f7f8f8c8a78a4042d33c21",
  measurementId: "G-X7XWZ136LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);