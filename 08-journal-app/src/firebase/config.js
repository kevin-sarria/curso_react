// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPZpzmaFGYKkmp6rNKiKBl-EuHS_UAtFw",
  authDomain: "journal-app-c192a.firebaseapp.com",
  projectId: "journal-app-c192a",
  storageBucket: "journal-app-c192a.appspot.com",
  messagingSenderId: "191147589685",
  appId: "1:191147589685:web:14991ca9eaf4e424be317c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );