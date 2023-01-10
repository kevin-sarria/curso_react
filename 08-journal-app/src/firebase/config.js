// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnviroments } from "../helpers/getEnviroments";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnviroments();

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyBPZpzmaFGYKkmp6rNKiKBl-EuHS_UAtFw",
//   authDomain: "journal-app-c192a.firebaseapp.com",
//   projectId: "journal-app-c192a",
//   storageBucket: "journal-app-c192a.appspot.com",
//   messagingSenderId: "191147589685",
//   appId: "1:191147589685:web:14991ca9eaf4e424be317c"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDq1IxVDekh1vRHF5rrg6-pI2ULMwq0b9g",
//   authDomain: "friendly-bazaar-357305.firebaseapp.com",
//   projectId: "friendly-bazaar-357305",
//   storageBucket: "friendly-bazaar-357305.appspot.com",
//   messagingSenderId: "167702081618",
//   appId: "1:167702081618:web:6fd40db4719c905fd96f8b"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);