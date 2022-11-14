// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCVvHyzdnPPRBMzGCdsgYzHmBm8ErfKCnI",
    authDomain: "trans-id.firebaseapp.com",
    projectId: "trans-id",
    storageBucket: "trans-id.appspot.com",
    messagingSenderId: "827384172720",
    appId: "1:827384172720:web:ee36386712b9c66e256b75"

};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;