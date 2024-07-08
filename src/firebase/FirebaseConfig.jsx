// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_5-e8t7o5CdpIOJKQhq2hQM3P6hiVIi8",
  authDomain: "ecommerce-app-bf60e.firebaseapp.com",
  projectId: "ecommerce-app-bf60e",
  storageBucket: "ecommerce-app-bf60e.appspot.com",
  messagingSenderId: "684988884410",
  appId: "1:684988884410:web:3c93e07a8ded9a0ddbe983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};