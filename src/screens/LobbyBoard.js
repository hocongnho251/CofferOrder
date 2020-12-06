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

import HeaderBar from '../components/HeaderBar'
class LobbyBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  componentDidMount(){

  }

  onLogin = () => {
    Alert.alert("Alert", "Button presses Login");
  }

  render() {
    return (
      <View style={styles.container}>
      <HeaderBar titleHeader="Lobby Board" hasGoBack={true} hasLogout={true}></HeaderBar>
      <ImageBackground source={require("../assets/images/background.png")} style={styles.image} >
       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
       <View><Text>LobbyBoard</Text></View>
      </ScrollView>
      </ImageBackground>
      </View>
    );
  }
}

export default LobbyBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
