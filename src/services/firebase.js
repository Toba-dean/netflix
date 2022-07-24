import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyDmKFyuWTAJe6aYtexyOGkZvpQ-3FutZrk",
  authDomain: "netflix-2c29e.firebaseapp.com",
  projectId: "netflix-2c29e",
  storageBucket: "netflix-2c29e.appspot.com",
  messagingSenderId: "595000721371",
  appId: "1:595000721371:web:7203546d11df6fed06b1fe"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

// Adding the seedData to the db once
// seedDatabase(firebase)

export { firebase }

