import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJ-lUR6tDi0-3rTsxBZA_RkYngopmJdYg",
    authDomain: "imessage-clone-c176a.firebaseapp.com",
    databaseURL: "https://imessage-clone-c176a.firebaseio.com",
    projectId: "imessage-clone-c176a",
    storageBucket: "imessage-clone-c176a.appspot.com",
    messagingSenderId: "697034965197",
    appId: "1:697034965197:web:e765d33a29fcf20de9a984",
    measurementId: "G-1DFLN7PZM8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;