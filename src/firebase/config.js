import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {

  apiKey: "AIzaSyAwdjfYbpXXRfbi9UQhg1Vlan8janALPM8",

  authDomain: "miniblog-cb57b.firebaseapp.com",

  projectId: "miniblog-cb57b",

  storageBucket: "miniblog-cb57b.appspot.com",

  messagingSenderId: "715667923614",

  appId: "1:715667923614:web:4a82406e7e1e6247d3518f"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }