// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFXLpneagH-KQ-4rCLguvfF09Q4xbeh9E",
  authDomain: "bridesvow.firebaseapp.com",
  projectId: "bridesvow",
  storageBucket: "bridesvow.appspot.com",
  messagingSenderId: "754767790566",
  appId: "1:754767790566:web:2a511f982c54ceea841627"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
