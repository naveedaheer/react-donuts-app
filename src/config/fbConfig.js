import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import "firebase/storage";

//Firebase connecteren
var firebaseConfig = {
    apiKey: "AIzaSyC8aPTtY941cKxQnEDE8aXGcTrCbY3--eA",
    authDomain: "homemadegonuts-c8ba2.firebaseapp.com",
    databaseURL: "https://homemadegonuts-c8ba2.firebaseio.com",
    projectId: "homemadegonuts-c8ba2",
    storageBucket: "homemadegonuts-c8ba2.appspot.com",
    messagingSenderId: "689510899855",
    appId: "1:689510899855:web:c29715598494dc24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


    export default firebase;