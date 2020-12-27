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
import { DataTable } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
class BillItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: ''
    }
  }

  componentDidMount(){
    this.getTotal();
  }

  getTotal = () =>{
      var total = 0;
      this.props.order.orders.map((item, index)=>{
        total += Number(item.order_quantity)*Number(item.order_price);
      })
    return total;
  }

  saveData= (key)=>{
    try{
      firebase.database().ref('table/'+key+'/order').remove();
      firebase.database().ref('table/'+key).update({
        status: 2
      });
    } catch(e){
    }
  }

  payDone = (tableKey) => {
    
     Alert.alert(
      'Question',
      'Customer were payout ?',
      [
        {
          text: 'Yes',
          onPress: () => {this.saveData(tableKey)}
        },
        {
          text: 'No',
          onPress: () => {}
        },
      ],
      {cancelable: false},
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.tableName}>TABLE {this.props.order.table_name}</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title >
              <Text style={styles.title}>Name</Text>
            </DataTable.Title>

            <DataTable.Title numeric>
              <Text style={styles.title}>Quantity</Text>
            </DataTable.Title>

            <DataTable.Title numeric>
              <Text style={styles.title}>Price</Text>
            </DataTable.Title>
          </DataTable.Header>

          {
            this.props.order.orders.map((item,index)=> 
              <DataTable.Row key={index}>
                <DataTable.Cell >
                <Text style={styles.content}>
                  {item.order_name}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={styles.content}>
                    {item.order_quantity}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={styles.content}>
                    {Number(item.order_quantity)*Number(item.order_price)}
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            )
          }
        </DataTable>
        <View style={styles.total}>
          <Text style={styles.title}>TOTAL</Text>
          <Text style={styles.title}>{this.getTotal()}</Text>
        </View>
        <View style={styles.button}>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.payDone(this.props.order.table_key)}>
            <Text style={styles.loginText}>Done</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default BillItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1
  },
  header: {
    width: Dimensions.get('window').width/2,
    backgroundColor:'red',
    flex: 1,
    flexDirection: 'row',
  },
  title:{
    color: '#25403B',
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
  },
  content:{
    color: '#BA5252',
    fontSize: 17,
    fontFamily: "Quicksand-Bold",
  },
  buttonContainer: {
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:120,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#25403B",
  },
  loginText: {
    color: '#E2CEB2',
    fontSize: 15,
    fontFamily: "Quicksand-Bold"
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  total: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  tableName: {
    color: '#2F2F2F',
    fontSize: 23,
    fontFamily: "Quicksand-Bold",
    marginLeft: 10
  }
});
