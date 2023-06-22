import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4xWjUbggGMCPOFMLxAKSQLWKaYemwI_M",
  authDomain: "nuevoaroma-36bac.firebaseapp.com",
  projectId: "nuevoaroma-36bac",
  storageBucket: "nuevoaroma-36bac.appspot.com",
  messagingSenderId: "887544200985",
  appId: "1:887544200985:web:b37adac06de781aa37cf88",
  measurementId: "G-WCYEH6HWN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
