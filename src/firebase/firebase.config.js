// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQbE8_B36Cx3RQtfT-lMbHN4tMygcUBJU",
    authDomain: "shine-events-6ef5b.firebaseapp.com",
    projectId: "shine-events-6ef5b",
    storageBucket: "shine-events-6ef5b.appspot.com",
    messagingSenderId: "187796711126",
    appId: "1:187796711126:web:f2f143291215497b25cb77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;