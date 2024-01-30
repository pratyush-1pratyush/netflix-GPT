// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI6H9sqaDz6sICg5N5SYKU4hwwrTgl52Q",
  authDomain: "netflixgpt-5e4f2.firebaseapp.com",
  projectId: "netflixgpt-5e4f2",
  storageBucket: "netflixgpt-5e4f2.appspot.com",
  messagingSenderId: "920304871886",
  appId: "1:920304871886:web:4150973e16352c0f34639f",
  measurementId: "G-1JW364V0LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();