import firebase from 'firebase/compat/app'

var firebaseConfig = {
    apiKey: "AIzaSyA2Y2ope7aUrF9aNbB5CHciMSVQD4NgURY",
    authDomain: "bookit-nus.firebaseapp.com",
    projectId: "bookit-nus",
    storageBucket: "bookit-nus.appspot.com",
    messagingSenderId: "1057405213119",
    appId: "1:1057405213119:web:3e15fd78699aad1e26a90a",
    measurementId: "G-F3D9GPJNJT"
  };

firebase.initializeApp(firebaseConfig);
export {firebase};