import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

import HeaderBar from '../components/HeaderBar'
class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  onLogin = () => {
    Alert.alert("Alert", "Button presses Login");
  }
  goToLobbyBoard = () => {
    Actions.lobby();
  }

  goToCashierBoard(){
    Actions.cashier();
  }
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require("../assets/images/background.png")} style={styles.image} >
      <HeaderBar titleHeader="Menu" hasLogout={true}></HeaderBar>
       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} >Manager Board</Text>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.goToLobbyBoard()}>
          <View style={styles.titleButton}>
            <Image
              source={require('../assets/images/icon-home.png')}
              style={styles.iconMenu} resizeMode="contain"
            />
            <Text style={styles.loginText}>Lobby Board</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.goToCashierBoard()}>
         <View style={styles.titleButton}>
            <Image
              source={require('../assets/images/icon-cashier.png')}
              style={styles.iconMenu} resizeMode="contain"
            />
            <Text style={styles.loginText}>Cashier Board</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLogin()}>
           <View style={styles.titleButton}>
            <Image
              source={require('../assets/images/icon-setting.png')}
              style={styles.iconMenu} resizeMode="contain"
            />
            <Text style={styles.loginText}>Menu Setting</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
      </ImageBackground>
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
   buttonContainer: {
    height:58,
    justifyContent: 'center',
    marginBottom:40,
    width:300,
    borderRadius:6,
  },
  loginButton: {
    backgroundColor: "#25403B",
  },
  loginText: {
    color: '#E2CEB2',
    fontSize: 20,
    fontFamily: "Quicksand-Bold"
  },
  titleText: {
    color:  "#25403B",
    fontSize: 40,
    fontFamily: "Quicksand-Bold"
  },
  titleContainer:{
    marginBottom: 50,
    marginTop: 100,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  iconMenu: {
    width: 28,
    height: 28
  },
  titleButton:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});
