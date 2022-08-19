// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwPk6GozHAm-jFJNGYbu5YnaYjc41Qh5M",
  authDomain: "auth-app-7eab4.firebaseapp.com",
  projectId: "auth-app-7eab4",
  storageBucket: "auth-app-7eab4.appspot.com",
  messagingSenderId: "991120705060",
  appId: "1:991120705060:web:abc1b9fcf6fd8c7a90bab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;