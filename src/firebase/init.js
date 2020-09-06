import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAiYuuYAsvB_QV-85qT5p49b4PN-php13I",
    authDomain: "vue-chat-project-cd7f2.firebaseapp.com",
    databaseURL: "https://vue-chat-project-cd7f2.firebaseio.com",
    projectId: "vue-chat-project-cd7f2",
    storageBucket: "vue-chat-project-cd7f2.appspot.com",
    messagingSenderId: "1086408784864",
    appId: "1:1086408784864:web:7ad66a8cd0ecf0de358985",
    measurementId: "G-MK4GC4NT7B"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()
  firebase.analytics();