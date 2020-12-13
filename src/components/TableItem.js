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
class TableItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: ''
    }
  }

  componentDidMount(){
    
  }

  orderDrink = (item) => {
    console.log("KEY",item);
  }

  render() {
    return (
     <View style={styles.container} >
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.orderDrink(this.props.table)}>
            <Text style={styles.tableText}>{this.props.table.name}</Text>
        </TouchableHighlight>
        
        {
          this.props.table.status === 1 ?
            <View style={styles.emptyStatusContainer}>
              <Text style={styles.tableStatus}>Guest</Text>
            </View>
            :
             <View style={styles.statusContainer}>
              <Text style={styles.tableStatus}>Empty</Text>
            </View>
        }
      </View>
    );
  }
}

export default TableItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: Dimensions.get('window').width / 3 - 10,
    justifyContent: 'center',
    alignItems:'center',    
    margin:5
  },
  buttonContainer: {
    height:80,
    justifyContent: 'center',
    // marginBottom:40,
    width:80,
    borderRadius:6,
  },
  loginButton: {
    backgroundColor: "#25403B",
  },
  tableText: {
    fontSize: 40,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
    color: "#E2CEB2"
  },
  tableStatus: {
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFF",
  },
  statusContainer: {
    borderRadius: 7,
    height: 30,
    backgroundColor:"#BA5252",
    width:80,
  },
  emptyStatusContainer: {
    borderColor: "#25403B",
    borderWidth: 2,
    borderRadius: 7,
    height: 30,
    width:80,
  }
});
