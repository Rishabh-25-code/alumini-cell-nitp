// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSZnzeksNvNsqtCEXw4ccDq25U92ma7oU",
  authDomain: "nitp-alumni-cell.firebaseapp.com",
  projectId: "nitp-alumni-cell",
  storageBucket: "nitp-alumni-cell.appspot.com",
  messagingSenderId: "253049130415",
  appId: "1:253049130415:web:c34b0ad1e365cd9419b35a",
  measurementId: "G-8SQ056D35L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};
// const analytics = getAnalytics(app);