// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqx_FnQ4dJWwM1YcvNK1gXaESrXJdF8Mk",
  authDomain: "reactjs-e2cfb.firebaseapp.com",
  projectId: "reactjs-e2cfb",
  storageBucket: "reactjs-e2cfb.appspot.com",
  messagingSenderId: "144901354536",
  appId: "1:144901354536:web:37e46ced34e88bcef7f11d",
  measurementId: "G-Z1VFP7QSWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {auth, storage};