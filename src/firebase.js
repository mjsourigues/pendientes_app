// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp=firebase.initializeApp({
        apiKey: "AIzaSyBrAoRpNoBOOYGjXuMNx5O9LFyX7wPf_10",
        authDomain: "pendientes-app-bcb8c.firebaseapp.com",
        projectId: "pendientes-app-bcb8c",
        storageBucket: "pendientes-app-bcb8c.appspot.com",
        messagingSenderId: "368948766773",
        appId: "1:368948766773:web:a7d191862c280b2d49e97c",
        measurementId: "G-XY2DHN2TYN"
});

const db=firebaseApp.firestore();

export default db;
