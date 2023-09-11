import { initializeApp } from "firebase/app";
// its ok to ship this to client :)
const firebaseConfig = {
  apiKey: "AIzaSyAn7ZoxFyhbzc9xVOpt33L7eFq2YBCk4Vk",
  authDomain: "metarics-bvrit.firebaseapp.com",
  projectId: "metarics-bvrit",
  storageBucket: "metarics-bvrit.appspot.com",
  messagingSenderId: "930363382932",
  appId: "1:930363382932:web:74650349c2a92ddae66881"
};

export const app = initializeApp(firebaseConfig);