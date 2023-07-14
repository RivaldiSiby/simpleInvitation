import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./config";

export const signIn = async (payload: any) => {
  try {
    const auth = getAuth(app);
    const user = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const logOut = async () => {
  try {
    const auth = getAuth(app);
    const user = await signOut(auth);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
