import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import HeaderBar from '../components/HeaderBar';
import * as firebase from 'firebase';
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      errorMessage: ''
    }
  }

  onLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => Actions.menu())
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar titleHeader="Login" ></HeaderBar>
        <ImageBackground source={require("../assets/images/background.png")} style={styles.image} >
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText} >Login</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}/>
            </View>
              {this.state.errorMessage !== '' ?
              <Text style={styles.errorMessage}>
                {this.state.errorMessage}
              </Text>
              :
              null
              }
            <TouchableHighlight style={styles.buttonContainer}>
              <Text style={styles.forgotText} >Forgot password?</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLogin()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
          </ScrollView>
        </ImageBackground>
      </View>

    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      borderRadius:6,
      borderBottomWidth: 1,
      width:280,
      height:45,
      marginBottom:30,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      flex:1,
      borderRadius:6,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:200,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#25403B",
  },
  loginText: {
    color: '#E2CEB2',
    fontSize: 20,
    fontFamily: "Quicksand-Bold"
  },
  forgotText: {
    color:  "#25403B",
    fontSize: 15,
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
  errorMessage: {
    color: 'red',
    width: 280
  }
});
