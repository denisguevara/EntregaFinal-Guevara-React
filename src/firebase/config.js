// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk0cw3_ge_2PBBgVvizVu7A0chLYcSWwM",
  authDomain: "tienda-denis.firebaseapp.com",
  projectId: "tienda-denis",
  storageBucket: "tienda-denis.appspot.com",
  messagingSenderId: "944484284149",
  appId: "1:944484284149:web:2bb7330da8242fe257b7bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)