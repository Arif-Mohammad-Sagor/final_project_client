// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCspgPA56_ToxulkJiXkYShh_zwgPBDfD8",
  authDomain: "complete-mern-project.firebaseapp.com",
  projectId: "complete-mern-project",
  storageBucket: "complete-mern-project.appspot.com",
  messagingSenderId: "885404211211",
  appId: "1:885404211211:web:377128e5e899425dc50f0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);