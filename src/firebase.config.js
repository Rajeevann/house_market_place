// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrHQouM6bWeQwKJXt7f9HvBm0_Q5uHeKg",
  authDomain: "house-market-20b60.firebaseapp.com",
  projectId: "house-market-20b60",
  storageBucket: "house-market-20b60.appspot.com",
  messagingSenderId: "928809630968",
  appId: "1:928809630968:web:bf8adb7fc89b6ec1798f0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
