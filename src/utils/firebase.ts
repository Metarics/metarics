/**
 * We use firebase for authentication
 * Access to user info is provided at AuthContext in components
 */
import { initializeApp } from 'firebase/app'
let
  resolve,
  firebaseInstance,
  firestoreInstance

const firebaseConfig = {
    apiKey: "AIzaSyA4JsIV-WevFvSRXfQWRpKUpvqWCheIxlQ",
    authDomain: "thebrosproj.firebaseapp.com",
    projectId: "thebrosproj",
    storageBucket: "thebrosproj.appspot.com",
    messagingSenderId: "197012732766",
    appId: "1:197012732766:web:b7a52e33bce7c5e9be6dcf"
  };


  const promise = new Promise(res => resolve = res)

  export async function initialize () {
    if (import.meta.env.SSR) return undefined
    if (firebaseInstance) return firebaseInstance
  
    firebaseInstance = initializeApp(firebaseConfig)
    resolve(firebaseInstance)
    return firebaseInstance
  }
  
  export async function getInstance () {
    if (import.meta.env.SSR) return undefined
    if (firebaseInstance) return firebaseInstance
    return promise
  }
  
  export async function getFirestore () {
    if (firestoreInstance) return firestoreInstance
  
    const { getFirestore } = import('firebase/firestore')
    await getInstance()
    firestoreInstance = getFirestore()
    return firestoreInstance
  }
  
  export default {
    initialize,
    getInstance,
    getFirestore,
  }