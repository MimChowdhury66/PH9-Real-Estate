import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMcemA0aqDs5-abcbr6362e0hrjleKbaM",
  authDomain: "real-estate-with-auth-57ef1.firebaseapp.com",
  projectId: "real-estate-with-auth-57ef1",
  storageBucket: "real-estate-with-auth-57ef1.appspot.com",
  messagingSenderId: "682542811308",
  appId: "1:682542811308:web:24e4eb5def2bc4b658b709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;