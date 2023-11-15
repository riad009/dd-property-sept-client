// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxJrwPCpvmM6-_gm9hVZeMc-0Mh0Zbc3A",
  authDomain: "reachout-1b7f6.firebaseapp.com",
  projectId: "reachout-1b7f6",
  storageBucket: "reachout-1b7f6.appspot.com",
  messagingSenderId: "293655352993",
  appId: "1:293655352993:web:d987f628ca28239f47c2e0",
  measurementId: "G-Q5LT11VECT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;