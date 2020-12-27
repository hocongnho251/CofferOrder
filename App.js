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
import Menu from './src/screens/Menu'
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, Text, View, Image } from 'react-native';
import LobbyBoard from './src/screens/LobbyBoard';
import Order from './src/screens/Order';
import CashierBoard from './src/screens/CashierBoard';


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
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
      <Scene key="root" panHandlers={null}>
        <Scene
          key="login"
          component={Login}
          title="Login"
          hideNavBar={true}
        />
        <Scene
          initial
          key="menu"
          component={Menu}
          title="Menu"
          hideNavBar={true}
        />
        <Scene
          key="lobby"
          component={LobbyBoard}
          title="Lobby Board"
          hideNavBar={true}
        />
        <Scene
          key="order"
          component={Order}
          title="Order"
          hideNavBar={true}
        />
        <Scene
          key="cashier"
          component={CashierBoard}
          title="Cashier Board"
          hideNavBar={true}
        />
      </Scene>
      
    </Router>
    </>
  );
};


export default App;

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25403B',
  },
  navTitle: {
    color: 'white',
    fontFamily: "Quicksand-Bold"
  },
  routerScene: {
    // paddingTop:20, // some navbar padding to avoid content overlap
  },
})