import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCS358DdWZJm1yZSDGz645ydLPEnw9NLac",
    authDomain: "fb-upgraded.firebaseapp.com",
    projectId: "fb-upgraded",
    storageBucket: "fb-upgraded.appspot.com",
    messagingSenderId: "807665439737",
    appId: "1:807665439737:web:37889e4dca500b39aa6328"
  };

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };