 import firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCh0aGM20fFqiuOEOY0760efeEbI7FQ6Gg",
    authDomain: "firegram-bf09e.firebaseapp.com",
    databaseURL: "https://firegram-bf09e.firebaseio.com",
    projectId: "firegram-bf09e",
    storageBucket: "firegram-bf09e.appspot.com",
    messagingSenderId: "306573061246",
    appId: "1:306573061246:web:811c1a6ed4a2f8f042bc2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };