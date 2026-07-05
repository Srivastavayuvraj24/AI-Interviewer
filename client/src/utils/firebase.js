
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interviewer-f6f05.firebaseapp.com",
  projectId: "ai-interviewer-f6f05",
  storageBucket: "ai-interviewer-f6f05.firebasestorage.app",
  messagingSenderId: "380588141039",
  appId: "1:380588141039:web:1da0310b15b238f58cae1a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}