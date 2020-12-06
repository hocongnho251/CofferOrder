import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

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

  render() {
    return (
      <View style={styles.container}>
      <HeaderBar titleHeader="Menu" hasLogout={true}></HeaderBar>
       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} >Manager Board</Text>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLogin()}>
              <Text style={styles.loginText}>Lobby Board</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLogin()}>
        <View style={styles.button}>
          <Text style={styles.loginText}>Cashier Board</Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLogin()}>
          <Text style={styles.loginText}>Menu Setting</Text>
        </TouchableHighlight>
      </ScrollView>
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2CEB2',
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
   buttonContainer: {
    height:58,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:40,
    width:300,
    borderRadius:6,
  },
  loginButton: {
    backgroundColor: "#25403B",
  },
  loginText: {
    color: 'white',
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
  }
});
