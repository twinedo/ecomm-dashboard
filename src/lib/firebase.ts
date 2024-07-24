// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWe7LSBIQ-6Ul-zOKAvBiSMKZ9vPHt_2M",
  authDomain: "ecomm-dashboard-twinedo.firebaseapp.com",
  projectId: "ecomm-dashboard-twinedo",
  storageBucket: "ecomm-dashboard-twinedo.appspot.com",
  messagingSenderId: "333910034708",
  appId: "1:333910034708:web:d469cb6a2aa666c7669a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
