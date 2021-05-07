import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqR12RdfGjgCG4uw_sZrl5lwaYhHYKbNs",
    authDomain: "flixnet-360fa.firebaseapp.com",
    projectId: "flixnet-360fa",
    storageBucket: "flixnet-360fa.appspot.com",
    messagingSenderId: "1086528580011",
    appId: "1:1086528580011:web:ac5836bae733e46c130aee"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;