import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRCt_Unwhxm-4YWvsogiD3p0WhoMkdkUU",
  authDomain: "antique-shop-8ae62.firebaseapp.com",
  projectId: "antique-shop-8ae62",
  storageBucket: "antique-shop-8ae62.firebasestorage.app",
  messagingSenderId: "821309748469",
  appId: "1:821309748469:web:a844ab94d5f8c97160c1bc",
  measurementId: "G-SQQMVY4PEB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
