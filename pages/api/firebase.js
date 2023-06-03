// firebase.js

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBcWPwQu2a1Kgx6LSg3e2s4yvzLKfSB0Jw",
  authDomain: "theboringcube-f508a.firebaseapp.com",
  databaseURL: "https://theboringcube-f508a-default-rtdb.firebaseio.com",
  projectId: "theboringcube-f508a",
  storageBucket: "theboringcube-f508a.appspot.com",
  messagingSenderId: "1022151595258",
  appId: "1:1022151595258:web:75f874855c2a887fb32543",
  measurementId: "G-YYN18C1SR5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
