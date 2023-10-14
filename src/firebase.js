// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import firebase from '@firebase/app';
//require('firebase/auth');


const firebaseConfig = {
    apiKey: "AIzaSyBpnJTuaX3rgegNApmYHhkNJa368ULxn9I",
    authDomain: "clone-c5acf.firebaseapp.com",
    projectId: "clone-c5acf",
    storageBucket: "clone-c5acf.appspot.com",
    messagingSenderId: "148589481318",
    appId: "1:148589481318:web:56a1f946111010aadccca7",
    measurementId: "G-CMTTQG9EX5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};