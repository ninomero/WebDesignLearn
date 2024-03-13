// import firebase from 'firebase/app'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
// import 'firebase/compat/storage'
// import 'firebase/compat/functions';

import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMoD0Ni8bdogk8PfZh54KxQwEOCiQFhMc",
    authDomain: "ec-app-dev-b2c1e.firebaseapp.com",
    projectId: "ec-app-dev-b2c1e",
    storageBucket: "ec-app-dev-b2c1e.appspot.com",
    messagingSenderId: "817370370595",
    appId: "1:817370370595:web:7908eef3c5a3b2fff41796",
    measurementId: "G-JPDVMYDK4M"
};

// firebaseの初期化処理
// config情報を使用して初期化している
const app = initializeApp(firebaseConfig);

// 使用しやすいように変数に設定
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const functions = firebase.functions();
// export const FirebaseTimestamp = app.firestore.Timestamp;
export const FirebaseTimestamp = "ss";
