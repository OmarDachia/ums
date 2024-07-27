import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZ4kyUcSR0pPIc4WZjaK54hrR2IOcakc",
  authDomain: "umss-5071c.firebaseapp.com",
  projectId: "umss-5071c",
  storageBucket: "umss-5071c.appspot.com",
  messagingSenderId: "638779376513",
  appId: "1:638779376513:web:51a9ce8bee09a02b6a1e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }