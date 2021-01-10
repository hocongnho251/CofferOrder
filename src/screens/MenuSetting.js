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
  SafeAreaView,
  FlatList,
  ImageBackground,
  ScrollView
} from 'react-native';

import HeaderBar from '../components/HeaderBar'
import TableItem from '../components/TableItem'
import * as firebase from 'firebase';

class MenuSetting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableName: '',
      foodName: '',
      price: '',
      email: '',
      password: ''

    }
  }

  addTable = () => {
    var {tableName} = this.state;
    var name = tableName;
    var status = 1;
     firebase.database().ref('table/').push({
        name,
        status
    }).then((data) => {
        alert('Add table success');
    }).catch((error) => {
        alert('Add table failed');
    })
  }

  addFood = () => {
    var name = this.state.foodName;
    var price = this.state.price;
     firebase.database().ref('menu/').push({
        name,
        price
    }).then((data) => {
        alert('Add food success');
    }).catch((error) => {
        alert('Add food failed');
    })
  }

  addAccount = () => {
    const {email, password} = this.state;
    var username = email;
    var role = 2;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        firebase.database().ref('account/').push({
        username,
        role
        }).then((data) => {
          alert('Add account success');
        }).catch((error) => {
            alert('Add account failed');
        })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/background.png")} style={styles.image} >
          <HeaderBar titleHeader="Menu Setting" hasGoBack={true} hasLogout={true}></HeaderBar>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText} >Add Table</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Table name"
                placeholderTextColor="#E2CEB2"
                onChangeText={(tableName) => this.setState({tableName})}/>
            </View>
            <View style={styles.buttonGroup}>
              {
              this.state.tableName !== ""? 
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.addTable()}>
                  <Text style={styles.loginText}>Add</Text>
                </TouchableHighlight>
              : null
              }
            </View>
             <View style={styles.titleContainer}>
              <Text style={styles.titleText} >Add Food</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Drink name"
                placeholderTextColor="#E2CEB2"
                onChangeText={(foodName) => this.setState({foodName})}/>
            </View>
             <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Price"
                placeholderTextColor="#E2CEB2"
                onChangeText={(price) => this.setState({price})}/>
            </View>
            <View style={styles.buttonGroup}>
            {
              this.state.foodName !== "" && this.state.price !== ""?
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.addFood()}>
                  <Text style={styles.loginText}>Add</Text>
                </TouchableHighlight>
              : 
              null
            }
            </View>
             <View style={styles.titleContainer}>
              <Text style={styles.titleText} >Add User</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#E2CEB2"
                onChangeText={(email) => this.setState({email})}/>
            </View>
             <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Password"
                placeholderTextColor="#E2CEB2"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}/>
            </View>
            <View style={styles.buttonGroup}>
              {
              this.state.email !== "" && this.state.password !== ""?
              <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.addAccount()}>
                <Text style={styles.loginText}>Add</Text>
              </TouchableHighlight>
              : null
              }
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default MenuSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    marginLeft: 20
  },
  inputContainer: {
      backgroundColor: '#25403B',
      borderRadius:6,
      width:280,
      flexDirection: 'row',
      alignItems:'center',
      marginBottom: 20
  },
  inputs:{
      height:45,
      marginLeft:16,
      backgroundColor: '#25403B',
      flex:1,
      borderRadius:6,
      color: 'white'
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:86,
    borderRadius:30,
    marginLeft: 5
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
    fontSize: 25,
    fontFamily: "Quicksand-Bold"
  },
  titleContainer:{
    marginBottom: 30,
    marginTop: 15
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
