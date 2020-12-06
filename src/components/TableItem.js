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
class TableItem extends React.Component {

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
      <HeaderBar titleHeader="Lobby Board" hasLogout={true}></HeaderBar>
       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
       
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
});
