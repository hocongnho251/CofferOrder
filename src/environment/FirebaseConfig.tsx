import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig.json';

// Initialize Firebase
const FirebaseConfig = firebaseConfig
const FirebaseApp = firebase.initializeApp(FirebaseConfig);

export const FirebaseAuth = FirebaseApp.auth();
export const FireStore = FirebaseApp.firestore();