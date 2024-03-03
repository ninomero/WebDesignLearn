import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'
import { firebaseConfig } from './config';

// firebaseの初期化処理
firebase.initializeApp(firebaseConfig);

// 使用しやすいように変数に設定
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const FirebaseTimestamp = firebase.firestore.Timestamp;