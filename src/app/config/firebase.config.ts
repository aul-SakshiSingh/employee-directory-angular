import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2v9hIrX5ay4m3z1agPNqd_1O-cby-rvw",
  authDomain: "employee-directory-32cb4.firebaseapp.com",
  projectId: "employee-directory-32cb4",
  storageBucket: "employee-directory-32cb4.firebasestorage.app",
  messagingSenderId: "319726120198",
  appId: "1:319726120198:web:f524d9a1382ed88648c287"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);