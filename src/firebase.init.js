// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5zSc2tYaK9l3N2l-IWEeD6JhApEutTNw",
  authDomain: "fresh-fruits-vegetables.firebaseapp.com",
  projectId: "fresh-fruits-vegetables",
  storageBucket: "fresh-fruits-vegetables.appspot.com",
  messagingSenderId: "569680377366",
  appId: "1:569680377366:web:ca86f38ca7662983eee737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;