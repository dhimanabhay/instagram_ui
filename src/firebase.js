
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBKrAFOs5_gpF3rxd32vV1R_DDG57kAAnw",
  authDomain: "instagram-clone-384e5.firebaseapp.com",
  projectId: "instagram-clone-384e5",
  storageBucket: "instagram-clone-384e5.appspot.com",
  messagingSenderId: "835856589174",
  appId: "1:835856589174:web:6a15e06625e662af5e9a57"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
