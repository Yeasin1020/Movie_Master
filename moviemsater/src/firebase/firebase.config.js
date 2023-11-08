// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSbC2usywBmM_MsvL6veRRBmiyIoco4Ck",
  authDomain: "movie-master-e9a56.firebaseapp.com",
  projectId: "movie-master-e9a56",
  storageBucket: "movie-master-e9a56.appspot.com",
  messagingSenderId: "258466535934",
  appId: "1:258466535934:web:7344849b24c69c56e388af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;