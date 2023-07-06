// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfl1JJf_gRiEJQehjyaPcLDMJtR3E3QEA",
  authDomain: "chat-89407.firebaseapp.com",
  projectId: "chat-89407",
  storageBucket: "chat-89407.appspot.com",
  messagingSenderId: "532328628826",
  appId: "1:532328628826:web:880029d2236b816b410e63",
  measurementId: "G-WXXCE2TV54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();

const analytics = getAnalytics(app);