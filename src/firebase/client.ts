import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA4JsIV-WevFvSRXfQWRpKUpvqWCheIxlQ",
    authDomain: "thebrosproj.firebaseapp.com",
    projectId: "thebrosproj",
    storageBucket: "thebrosproj.appspot.com",
    messagingSenderId: "197012732766",
    appId: "1:197012732766:web:b7a52e33bce7c5e9be6dcf"
  };

export const app = initializeApp(firebaseConfig);