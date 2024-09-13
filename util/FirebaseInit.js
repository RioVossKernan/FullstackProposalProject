// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjbkrVkRjZ5jipWjJCnpE-IBw8ORqc48",
  authDomain: "fsabproposalproject.firebaseapp.com",
  projectId: "fsabproposalproject",
  storageBucket: "fsabproposalproject.appspot.com",
  messagingSenderId: "699956904623",
  appId: "1:699956904623:web:4069ef967bd66ecc760a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Add this line to export the Firestore database