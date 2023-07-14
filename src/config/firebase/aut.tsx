import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
