import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAs4bbEAzJdB-9O_NbZxSsk7hemLrt4FN0",
    authDomain: "coachingkart.firebaseapp.com",
    databaseURL: "https://coachingkart.firebaseio.com",
    projectId: "coachingkart",
    storageBucket: "coachingkart.appspot.com",
    messagingSenderId: "807411960195",
    appId: "1:807411960195:web:7f68ec426f913df3410eb6"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
