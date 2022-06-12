import { initializeApp } from "firebase/app";
import firebaseConfig from "../configs/firebase.config";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const fireAuth = {
  signIn: () => signInWithPopup(auth, provider),
  signInEmail: (email, password) =>
    signInWithEmailAndPassword(auth, email, password),
  signOut: () => signOut(auth),
};
