
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUmFhVTRe2VWhg-BY6rf2Aqxz-D3vyzOI",
  authDomain: "fir-basics-de98a.firebaseapp.com",
  projectId: "fir-basics-de98a",
  storageBucket: "fir-basics-de98a.appspot.com",
  messagingSenderId: "315386679472",
  appId: "1:315386679472:web:cbe7101bb400e1ac522b75",
  measurementId: "G-Q58R3EPWMT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth(app);;
