import { useMemo, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, fireAuth } from "../utils/firebase";

export const useAuth = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(() => auth.currentUser);

  const isSignedIn = useMemo(() => !!user, [user]);

  onAuthStateChanged(auth, setUser, (authError) => {
    setUser(null);
    console.log({ authError });
  });

  return { auth, user, isSignedIn, ...fireAuth };
};
