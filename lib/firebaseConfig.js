// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCLxWXaVn8QdtuzCMH8nkVwYMY9vmXMCM",
  authDomain: "turbofit-dea07.firebaseapp.com",
  projectId: "turbofit-dea07",
  storageBucket: "turbofit-dea07.firebasestorage.app",
  messagingSenderId: "27485137469",
  appId: "1:27485137469:web:946e6613f4beb51de4d854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}