/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import * as firebase from 'firebase';


import Login from './src/screens/Login'
const App: () => React$Node = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCLAn5CUU-Hd_pSUGcgfee7y8a0LRsGs4E",
    authDomain: "coffeeorder-abf6f.firebaseapp.com",
    projectId: "coffeeorder-abf6f",
    storageBucket: "coffeeorder-abf6f.appspot.com",
    messagingSenderId: "134112968846",
    appId: "1:134112968846:web:e8036afa61cc4a597089df",
    measurementId: "G-YFW5E6S9G5"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <>
      <Login></Login>
    </>
  );
};


export default App;
