import { initializeApp } from "firebase/app";
import firebaseConfig from "../configs/firebase.config";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const fireAuth = {
  signIn: () => signInWithPopup(auth, provider),
  signOut: () => signOut(auth),
};
