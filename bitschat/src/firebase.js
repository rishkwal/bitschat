// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDRx13Q5L1eIMBiL5GkBkEL91-oiUsSAZw",
    authDomain: "bitschatcrux.firebaseapp.com",
    projectId: "bitschatcrux",
    storageBucket: "bitschatcrux.appspot.com",
    messagingSenderId: "1037057765509",
    appId: "1:1037057765509:web:97899c20258d4ac3ffb9ec",
    measurementId: "G-K4MDGP3396"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
