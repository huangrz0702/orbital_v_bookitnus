import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

import 'firebase/storage';  



var firebaseConfig = {
    apiKey: "AIzaSyA2Y2ope7aUrF9aNbB5CHciMSVQD4NgURY",
    authDomain: "bookit-nus.firebaseapp.com",
    projectId: "bookit-nus",
    storageBucket: "bookit-nus.appspot.com",
    messagingSenderId: "1057405213119",
    appId: "1:1057405213119:web:3e15fd78699aad1e26a90a",
    measurementId: "G-F3D9GPJNJT",
    databaseURL: "https://bookit-nus-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const storage = getStorage(app);
  const storageRef = ref(storage);
  const database = getDatabase(app);

  

  
  export { app, db, auth, storage, storageRef, database}
