import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB55C-X4SQSiFahY34G7yV_PZqTWkFJaDI",
  authDomain: "tiktok-jornada.firebaseapp.com",
  projectId: "tiktok-jornada",
  storageBucket: "tiktok-jornada.appspot.com",
  messagingSenderId: "219517922822",
  appId: "1:219517922822:web:a61b1a60ae1d9165169d87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;