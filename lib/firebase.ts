import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXmwCdgsAh61W8Y60k1cbhGrkNvGsdDv0",
  authDomain: "pocket-heist-reynal.firebaseapp.com",
  projectId: "pocket-heist-reynal",
  storageBucket: "pocket-heist-reynal.firebasestorage.app",
  messagingSenderId: "479866484826",
  appId: "1:479866484826:web:dba14491854b4eced1c063",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
