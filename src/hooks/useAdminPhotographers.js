import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocsFromServer,
  getFirestore,
  query,
} from "firebase/firestore";
import { useState } from "react";
import { app } from "../utils/firebase";

export const useAdminPhotographers = () => {
  const fireStore = getFirestore(app);
  const table = collection(fireStore, "photographers");

  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhotographerList = async () => {
    setLoading(true);
    try {
      const { docs } = await getDocsFromServer(query(table));
      setPhotographers(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const getPhotographerProfile = async (id) => {
    setLoading(true);
    try {
      const docSnap = await getDoc(doc(fireStore, "photographers", id));
      return docSnap.exists() ? docSnap.data() : null;
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const registerPhotographer = async (profile) => {
    setLoading(true);
    try {
      await addDoc(table, profile);
      await getPhotographerList();
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    photographers,
    getPhotographerList,
    getPhotographerProfile,
    registerPhotographer,
  };
};
