// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoiFcmdMc4evSW65KvVtoBmkcEKOb2F_s",
  authDomain: "fiverr-majed.firebaseapp.com",
  projectId: "fiverr-majed",
  storageBucket: "fiverr-majed.appspot.com",
  messagingSenderId: "937028272562",
  appId: "1:937028272562:web:4fe0fc79a3f3af625ee4ab",
  measurementId: "G-Q6MDL9WYDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);