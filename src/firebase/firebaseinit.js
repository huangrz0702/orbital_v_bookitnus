import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyA2Y2ope7aUrF9aNbB5CHciMSVQD4NgURY",
    authDomain: "bookit-nus.firebaseapp.com",
    projectId: "bookit-nus",
    storageBucket: "bookit-nus.appspot.com",
    messagingSenderId: "1057405213119",
    appId: "1:1057405213119:web:3e15fd78699aad1e26a90a",
    measurementId: "G-F3D9GPJNJT"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const storage = getStorage(app);

  
  export { app, db, auth, storage}
