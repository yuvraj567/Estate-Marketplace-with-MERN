// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d48c0.firebaseapp.com",
  projectId: "mern-estate-d48c0",
  storageBucket: "mern-estate-d48c0.appspot.com",
  messagingSenderId: "669505162981",
  appId: "1:669505162981:web:b5002385a8f8ce33d24e0c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);