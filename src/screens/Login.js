import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
class Login extends React.Component {

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

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onLogin()}>
          <Text style={styles.forgotText} >Forgot password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

       
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2CEB2',
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
    color: 'white',
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
    marginTop: -100,
    marginBottom: 50,
  }
});
