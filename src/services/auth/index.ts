import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { TUser } from "./auth.type";

export const signUp = async (email: string, password: string, additionalInfo: TUser) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), additionalInfo);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        return Promise.resolve(user.user);
    } catch (error) {
        return Promise.reject(error);
    }
}