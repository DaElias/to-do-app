// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
    NEXT_PUBLIC_FIREBASE_apiKey,
    NEXT_PUBLIC_FIREBASE_authDomain,
    NEXT_PUBLIC_FIREBASE_projectId,
    NEXT_PUBLIC_FIREBASE_storageBucket,
    NEXT_PUBLIC_FIREBASE_messagingSenderId,
    NEXT_PUBLIC_FIREBASE_appId,
    NEXT_PUBLIC_FIREBASE_measurementId
} from "@/util/const";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_apiKey + "",
    authDomain: NEXT_PUBLIC_FIREBASE_authDomain + "",
    projectId: NEXT_PUBLIC_FIREBASE_projectId + "",
    storageBucket: NEXT_PUBLIC_FIREBASE_storageBucket + "",
    messagingSenderId: NEXT_PUBLIC_FIREBASE_messagingSenderId + "",
    appId: NEXT_PUBLIC_FIREBASE_appId + "",
    measurementId: NEXT_PUBLIC_FIREBASE_measurementId + ""
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = (getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore, firebaseConfig };