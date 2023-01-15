import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsdcF11Ty_Pnvhp0JeklD7jhRIAIdrcgc",
    authDomain: "mitienda-ad2fe.firebaseapp.com",
    projectId: "mitienda-ad2fe",
    storageBucket: "mitienda-ad2fe.appspot.com",
    messagingSenderId: "984868317417",
    appId: "1:984868317417:web:0d7a8c39661df3666ae878"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
