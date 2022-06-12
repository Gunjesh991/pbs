import { initializeApp } from "firebase/app";
import firebaseConfig from "../configs/firebase.config";

import {
  createUserWithEmailAndPassword,
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
  signInEmail: async (email = "", password = "") => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        return user;
      } else {
        throw err;
      }
    }
  },
  signOut: () => signOut(auth),
};
