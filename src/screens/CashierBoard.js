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
import * as firebase from 'firebase';
import BillItem from '../components/BillItem'
import { Value } from 'react-native-reanimated';
class CashierBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listOrder: []
    }
  }

  componentDidMount(){
    firebase.database().ref('table').on('value',
      (snapshot) => {
        const tables = [];
        snapshot.forEach( (doc) => {
          firebase.database().ref('table/'+doc.key+'/order/').on('value',
            snap => {
              
              var el = [];
              snap.forEach(order => {
                el.push({
                  order_name: order.toJSON().name,
                  order_quantity: order.toJSON().quantity,
                  order_price: order.toJSON().price,
                })
              })
              if(el.length > 0){
                tables.push({
                  table_key: doc.key,
                  table_name: doc.toJSON().name,
                  orders: el
                })
              }
            }
          )
        });
        this.setState({
          listOrder: tables
        })
      });
  }
  
  render() {
    console.log(this.state.listOrder);
    return (
      <View style={styles.container}>
        <HeaderBar titleHeader="Cashier Board" hasGoBack={true} hasLogout={true}></HeaderBar>
        <ImageBackground source={require("../assets/images/background.png")} style={styles.image} >
            <SafeAreaView style={styles.safeView}>
              <FlatList
                data={this.state.listOrder}
                renderItem={({ item }) => {
                  return <BillItem order={item} key={item.key} />
                }}
                keyExtractor={(item) => item.key}
              />
            </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

export default CashierBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    marginTop:70
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
