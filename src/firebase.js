// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiwdHCcW6qXlBjCahVJB_yMZFHB-WBpD0",
  authDomain: "realtor-clone-react-aa124.firebaseapp.com",
  projectId: "realtor-clone-react-aa124",
  storageBucket: "realtor-clone-react-aa124.appspot.com",
  messagingSenderId: "782534238335",
  appId: "1:782534238335:web:3fb0c52204b85dd175df4a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
