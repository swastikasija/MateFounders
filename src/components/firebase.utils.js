import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvKIqqnpYG8yF0KNfHy3zcrwDgrO6FZDs",
  authDomain: "chessapp-1.firebaseapp.com",
  projectId: "chessapp-1",
  storageBucket: "chessapp-1.appspot.com",
  messagingSenderId: "770609957460",
  appId: "1:770609957460:web:466aed6e0713f3917f7bc1",
  measurementId: "G-6CTNJPZ0KF",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
