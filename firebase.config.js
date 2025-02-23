// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5g5vPZ8yV7d5TtGwIY0tVdZBdZbRbDn4",
  authDomain: "honestinvoice.firebaseapp.com",
  projectId: "honestinvoice",
  storageBucket: "honestinvoice.firebasestorage.app",
  messagingSenderId: "178273808417",
  appId: "1:178273808417:web:22107f88dd5a600ab6b360",
  measurementId: "G-L2LKET70TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
