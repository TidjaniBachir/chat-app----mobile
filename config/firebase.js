// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRDTTgE_1wz8Z8SvehMfUWzze21dbJOW8",
  authDomain: "chat-app-mobile-8181b.firebaseapp.com",
  projectId: "chat-app-mobile-8181b",
  storageBucket: "chat-app-mobile-8181b.appspot.com",
  messagingSenderId: "163903669668",
  appId: "1:163903669668:web:fad5e254f1123219186d31",
  measurementId: "G-HLT7GGR2JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);