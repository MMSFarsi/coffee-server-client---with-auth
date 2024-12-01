// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANYkU_m-hDsNB7ra4OI-Xn-E3S-VRe7jc",
  authDomain: "coffee-store-d36e0.firebaseapp.com",
  projectId: "coffee-store-d36e0",
  storageBucket: "coffee-store-d36e0.firebasestorage.app",
  messagingSenderId: "575729662226",
  appId: "1:575729662226:web:4292d5f1e8c2579975dbcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
