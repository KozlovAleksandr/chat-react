import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDDk4K6aQ3M0oYyf94G53UHVkXth6TCeLI",
  authDomain: "chat-d314b.firebaseapp.com",
  databaseURL:
    "https://chat-d314b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-d314b",
  storageBucket: "chat-d314b.appspot.com",
  messagingSenderId: "942752885280",
  appId: "1:942752885280:web:3526c75c917f7b688a6a45",
  measurementId: "G-RJXR6T2SQ8",
};

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
