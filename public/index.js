// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyARBHKLO9ye95VgWRZ28V3m2tI8HZiCMn0",
authDomain: "peoples-pt.firebaseapp.com",
databaseURL: "https://peoples-pt-default-rtdb.firebaseio.com",
projectId: "peoples-pt",
storageBucket: "peoples-pt.appspot.com",
messagingSenderId: "510714572620",
appId: "1:510714572620:web:c15f89fd2ec14d017e29e9",
measurementId: "G-T5EJXE2TS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);