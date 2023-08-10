// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjL7VpooEyGWIJ1nSm_C7EgqpGZVHS1Q4",
  authDomain: "react-project-e6a91.firebaseapp.com",
  projectId: "react-project-e6a91",
  storageBucket: "react-project-e6a91.appspot.com",
  messagingSenderId: "845382368659",
  appId: "1:845382368659:web:6fd336c15c51d41775bc66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);