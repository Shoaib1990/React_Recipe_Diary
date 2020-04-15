import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "***** Add your api key *****",
    authDomain: "recipedirary.firebaseapp.com",
    databaseURL: "https://recipedirary.firebaseio.com",
    projectId: "recipedirary",
    storageBucket: "recipedirary.appspot.com",
    messagingSenderId: "767376445453",
    appId: "***** Add your api id here *****"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;