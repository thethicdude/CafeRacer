// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMyn0h2Jok8wOd4bwocvCr97LCzJFstVw",
  authDomain: "caferacer-o01.firebaseapp.com",
  projectId: "caferacer-o01",
  storageBucket: "caferacer-o01.firebasestorage.app",
  messagingSenderId: "902536215172",
  appId: "1:902536215172:web:8739aa69de97548b3620d1",
  measurementId: "G-XJCG15B7GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);