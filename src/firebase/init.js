 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBZ_N4oIvsR7Suc1ae7IIv1vtjZIQPjc4M",
    authDomain: "skchatworld.firebaseapp.com",
    databaseURL: "https://skchatworld.firebaseio.com",
    projectId: "skchatworld",
    storageBucket: "skchatworld.appspot.com",
    messagingSenderId: "829055249299",
    appId: "1:829055249299:web:356066671bff251511d666"
  };
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//export the firestore database ,to be used in others components
export default firebaseApp.firestore()
