// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB2EirRSB25D-3lsiht_96laFvA91WbpQ",
  authDomain: "dd-property-a4a64.firebaseapp.com",
  projectId: "dd-property-a4a64",
  storageBucket: "dd-property-a4a64.appspot.com",
  messagingSenderId: "431538896977",
  appId: "1:431538896977:web:0a49a539fa3e2babf73870",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
