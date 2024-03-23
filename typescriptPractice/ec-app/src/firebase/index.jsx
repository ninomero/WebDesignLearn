import { initializeApp } from 'firebase/app';
// 'firebase/firestore/lite'とfirebase/firestore"を同時に使用することはできない
// import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, doc, serverTimestamp, setDoc, getFirestore } from "firebase/firestore";

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
// アカウント作成で使用
export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:3000/signUp");

export const db = getFirestore(app);
export const storage = getStorage(app);
// export const functions = firebase.functions();
// export const FirebaseTimestamp = app.firestore.Timestamp;
// export const FirebaseTimestamp = "ss";

// productsはFireStore上のコレクション名と紐づいている
// もしFireStore上に設定されていない場合エラーとなる
export const ref = doc(collection(db, "products"));

// ユーザ作成
// emailはxxxx@xxx.comのように正しく作成しないと400エラーとなる
export const createAccount = async (email, password) => {
    console.log("createAccount")
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
    }
    catch (error) {
        console.log(`There was an error: ${error}`);
        alert("メールアドレス or パスワードが正しくありません、確認しなおしてください");
    }
}

// ログイン
export const loginEmailPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
        console.log(`There was an error: ${error}`);
        alert("メールアドレス or パスワードが正しくありません、確認しなおしてください");
    }

}

// ログアウト
export const logout = async () => {
    await signOut(auth);
}

// 商品情報登録
export const saveProduct = async (name, description, category, gender, price, images) => {
    try {
        const timestamp = serverTimestamp(app);

        const data = {
            images: images,
            category: category,
            description: description,
            gender: gender,
            name: name,
            price: parseInt(price, 10),
            updated_at: timestamp
        }

        const id = ref.id;
        data.id = id;
        data.created_at = timestamp;

        await setDoc(ref, data)
    }
    catch (error) {
        console.log(`There was an error: ${error}`);
        alert("なにかがおかしい。。");
    }

}

// FireStore データ取得
// export const getData = async ({ fetchData }) => {
//     try {
//         console.log('GetData開始')
//         const snapshots = await getDocs(collection(db, "products"))
//         console.log(snapshots);

//         fetchData = (await snapshots).docChanges(1)
        
//         console.log("↓↓↓↓↓");
//         console.log(fetchData);
//         console.log("↑↑↑↑");
//         console.log('GetData終了')
//     }
//     catch (error) {
//         console.log(`There was an error: ${error}`);
//         alert("データが正しく取得できておりません");
//     }
// }

// Monitor auth state
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user)
            console.log('ログイン中')
        }
        else {
            // ログイン画面に遷移するようにしたりするとよい?
            console.log('ログインしていない')
        }
    })
}

monitorAuthState();
