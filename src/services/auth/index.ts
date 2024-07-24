import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export enum ERole {
    ADMIN = 'admin',
    MANAGER = 'manager',
    VIEWER = 'viewer'
}

type TUser = {
    email?: string;
    fullName?: string;
    username?: string;
    phone?: string;
    role?: ERole;
}

export const signUp = async (email: string, password: string, additionalInfo: TUser) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), additionalInfo);
        console.log('user', user)
    } catch (error) {
        console.error('error signUp', error);
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log('users', user.user);
    } catch (error) {
        console.error('error signIn', error.message);
    }
}