import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "./config";

const firestoreConfig = getFirestore(app);
const collectionConfig = collection(firestoreConfig, "visitor");

export const getVisitors = async () => {
  try {
    const res = await getDocs(collectionConfig);
    const wrapdata: any = [];
    res.forEach((docs) => {
      const patload = {
        id: docs.id,
        data: docs.data(),
      };
      wrapdata.push(patload);
    });
    console.log(wrapdata);
    return wrapdata;
  } catch (error) {
    throw error;
  }
};

export const addVisitor = async (payload: any) => {
  try {
    await addDoc(collectionConfig, payload);
    return;
  } catch (error) {
    throw error;
  }
};
export const getVisitor = async (id: string) => {
  try {
    const configdataDoc = doc(firestoreConfig, "visitor", id);
    const res = await getDoc(configdataDoc);
    return res.data();
  } catch (error) {
    throw error;
  }
};

export const updateVisitor = async (payload: any, id: string) => {
  try {
    const configdataDoc = doc(firestoreConfig, "visitor", id);
    await setDoc(configdataDoc, payload);
    return;
  } catch (error) {
    throw error;
  }
};
