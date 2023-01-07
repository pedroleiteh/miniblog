import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfMJ_HnxpvVEE359fMP7tqdeQ0VAtxsNI",
  authDomain: "miniblog-129c2.firebaseapp.com",
  projectId: "miniblog-129c2",
  storageBucket: "miniblog-129c2.appspot.com",
  messagingSenderId: "814644400593",
  appId: "1:814644400593:web:b3249e8b5683fc29cd90f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };

