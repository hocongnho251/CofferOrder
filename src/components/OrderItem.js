import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';
import { Dimensions  } from 'react-native';
import * as firebase from 'firebase';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
class OrderItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      quantity: 1,
      isSelected: false,
      orders:[]
    }
  }

  componentDidMount(){
    
  }

  onChangeQuantity = async() => {
    var order = {
      key: this.props.menu.key,
      name: this.props.menu.name,
      quantity: this.state.quantity,
      price: this.props.menu.price
    }
    let index = this.state.orders.findIndex((item) => item.key === order.key);
    if(index === -1){
      this.state.orders.push(order);
    } else {
      this.state.orders[index] = order;
    }
    this.props.listOrder(this.state.orders);
  }

  render() {
    const {isSelected} = this.state;
    return (
      <View style={styles.container} >
        <CheckBox
          value={isSelected}
          onValueChange={(isSelected) => this.setState({isSelected})}
          style={styles.checkbox}
        />
        <View>
          <Text style={styles.text} >{this.props.menu.name}</Text>
          <Text style={styles.text} >{this.props.menu.price} VNĐ</Text>
          { isSelected === true ?
            <View style={styles.quantity}>
              <Text style={styles.textQuantity}>Quantity: </Text>
              <TextInput
                style={styles.input} 
                keyboardType = 'numeric'
                onChangeText={(quantity) => this.setState({quantity})}
                onEndEditing={this.onChangeQuantity}
                ></TextInput>
            </View>
            :
            null
          }
        </View>
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
  },
  textQuantity: {
    color: '#25403B',
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
    marginTop: 5
  },
  quantity: {
    flexDirection: 'row',
  },
  input: {
    height:45,
    borderBottomColor: '#25403B',
    borderBottomWidth: 1,
    width:70,
    marginBottom: 20,
    color: '#25403B',
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
  }
});
