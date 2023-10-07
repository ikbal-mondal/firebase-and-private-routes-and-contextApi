
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl40iXMtc-puDa7MvXB61BCId70HY459U",
  authDomain: "auth-moha-milon.firebaseapp.com",
  projectId: "auth-moha-milon",
  storageBucket: "auth-moha-milon.appspot.com",
  messagingSenderId: "37078255594",
  appId: "1:37078255594:web:2c75363b6759d3239f9493"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;