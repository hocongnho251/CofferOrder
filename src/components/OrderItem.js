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
import { Dimensions  } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
class OrderItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text} >{this.props.menu.name}</Text>
        <Image source={require("../assets/images/placeholder-image.jpg")} style={styles.image} />
      </View>
    );
  }
}

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomWidth: 2
  },
  image: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/5,
    marginLeft: 50
  },
  text: {
    marginRight: 50,
    color: '#25403B',
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
  }
});
