import { initializeApp } from "firebase/app";
import "firebase/auth";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAltkLqn7-uslE74VRkkqlvDUdjdgbhO7c",
  authDomain: "chat-app-c55cb.firebaseapp.com",
  projectId: "chat-app-c55cb",
  storageBucket: "chat-app-c55cb.appspot.com",
  messagingSenderId: "92684051498",
  appId: "1:92684051498:web:01b319de31c677cbdf4f53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
