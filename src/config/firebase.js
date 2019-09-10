import firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyB8zCsFiZT4WqWj1Tn79JrADC3F7Hm3mzU",
  authDomain: "quizapp-8.firebaseapp.com",
  databaseURL: "https://quizapp-8.firebaseio.com",
  projectId: "quizapp-8",
  storageBucket: "",
  messagingSenderId: "470339126889",
  appId: "1:470339126889:web:d2a70d715fa984e5"
};

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}