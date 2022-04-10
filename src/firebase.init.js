// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7kutc6CVAdWcgqcQ-peORAumhvFXKJQ0",
  authDomain: "ema-john-simple-cbb6d.firebaseapp.com",
  projectId: "ema-john-simple-cbb6d",
  storageBucket: "ema-john-simple-cbb6d.appspot.com",
  messagingSenderId: "438202406913",
  appId: "1:438202406913:web:fd930708756cf2c16c8800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;