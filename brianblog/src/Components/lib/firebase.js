// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5abmFPIJAhFTs8MPxfYx-391kzWNVlVU",
  authDomain: "blog-interactivo-react.firebaseapp.com",
  databaseURL: "https://blog-interactivo-react-default-rtdb.firebaseio.com",
  projectId: "blog-interactivo-react",
  storageBucket: "blog-interactivo-react.appspot.com",
  messagingSenderId: "350454339374",
  appId: "1:350454339374:web:2de72fd9cfaf71901d0cbf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
