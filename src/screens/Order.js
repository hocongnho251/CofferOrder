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
  ImageBackground,
  SafeAreaView,
  FlatList
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import HeaderBar from '../components/HeaderBar';
import * as firebase from 'firebase';
import { Dimensions  } from 'react-native';
import OrderItem from '../components/OrderItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
var orders=[];

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listMenu: [],
    }
  }

  componentDidMount(){
    firebase.database().ref('menu').on('value',
      (snapshot) => {
        const menus = [];
        snapshot.forEach( (doc) => {
          menus.push({
            key: doc.key,
            name: doc.toJSON().name,
            price: doc.toJSON().price
          });
          this.setState({
            listMenu: menus
          })
        });
      });
  }

  onSubmit = async() => {
    var key = this.props.table_id;
    const uniqueSet = new Set(orders);
    var items = [...uniqueSet];
    items.forEach(item => {
        item.forEach(order => {
          var payload = {
            price: order.price,
            quantity: order.quantity,
            name: order.name
          }
          firebase.database().ref("table/"+key+"/order/").push(payload)
            .then(data => {
               firebase.database().ref("table/"+key).update({status: 1})
            })
    });
  });
    orders=[];
    alert('Order success');
    Actions.lobby();
    
  }

  listOrder = (data) => {
    orders.push(data)
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar titleHeader="Order" hasGoBack={true} hasLogout={true} ></HeaderBar>
            <SafeAreaView style={styles.safeView}>
             <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Search"
              />
            </View>
              <FlatList
                data={this.state.listMenu}
                renderItem={({ item }) => {
                  return <OrderItem menu={item} key={item.key} listOrder={this.listOrder} />
                }}
                keyExtractor={(item) => item.key}
              />
            </SafeAreaView>
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmit()}>
              <Text style={styles.loginText}>Order</Text>
            </TouchableHighlight>
      </View>

    );
  }
}

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2CEB2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeView: {
    flex: 1,
  },
  inputContainer: {
    borderBottomColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius:6,
    borderBottomWidth: 1,
    width:Dimensions.get('window').width,
    marginBottom:30,
    height:45,
    alignItems:'center',
    marginTop: 30
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    flex:1,
    borderRadius:6,
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
  }
});
