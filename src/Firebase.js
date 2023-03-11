// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1WguCQWigttW1t5vGcQWf0MFUCtIGov4",
  authDomain: "chatapp-15535.firebaseapp.com",
  projectId: "chatapp-15535",
  storageBucket: "chatapp-15535.appspot.com",
  messagingSenderId: "504125554338",
  appId: "1:504125554338:web:3e36711137314e838761fb"
};
// project-504125554338
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export  const db = getFirestore(app);
export const storage = getStorage(app)