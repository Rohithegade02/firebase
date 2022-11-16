// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFa5OzGGsExwN9UlC9QrSupWn2iuDJ5Do",
  authDomain: "twitter-788fc.firebaseapp.com",
  projectId: "twitter-788fc",
  storageBucket: "twitter-788fc.appspot.com",
  messagingSenderId: "173606526575",
  appId: "1:173606526575:web:87b02d81d60d591f06b79a",
  measurementId: "G-VFEQ088ZVW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
