// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_SECRET_apiKey);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_SECRET_apiKey,
  authDomain:import.meta.env.VITE_SECRET_authDomain,
  projectId:import.meta.env.VITE_SECRET_projectId,
  storageBucket:import.meta.env.VITE_SECRET_storageBucket,
  messagingSenderId:import.meta.env.VITE_SECRET_messagingSenderId,
  appId:import.meta.env.VITE_SECRET_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
