import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABRybBtDTaNXbxaU2QfKfxFp98re168lc",
  authDomain: "my-app-4d84a.firebaseapp.com",
  projectId: "my-app-4d84a",
  storageBucket: "my-app-4d84a.appspot.com",
  messagingSenderId: "266415560238",
  appId: "1:266415560238:web:91c126d4470b4230b7f1bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
