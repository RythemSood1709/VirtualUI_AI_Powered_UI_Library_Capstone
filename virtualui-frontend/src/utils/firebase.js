import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtualui-90604.firebaseapp.com",
  projectId: "virtualui-90604",
  storageBucket: "virtualui-90604.firebasestorage.app",
  messagingSenderId: "42316497333",
  appId: "1:42316497333:web:22789e83d60f8f2f5019fc"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}

