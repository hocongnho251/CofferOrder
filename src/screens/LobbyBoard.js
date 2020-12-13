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

class LobbyBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listTable: []
    }
  }

  componentDidMount(){
    firebase.database().ref('table').on('value',
      (snapshot) => {
        const tables = [];
        snapshot.forEach( (doc) => {
          tables.push({
            key: doc.key,
            name: doc.toJSON().name,
            status: doc.toJSON().status
          });
          this.setState({
            listTable: tables
          })
        });
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar titleHeader="Lobby Board" hasGoBack={true} hasLogout={true}></HeaderBar>
        <ImageBackground source={require("../assets/images/background.png")} style={styles.image} >
            <SafeAreaView style={styles.safeView}>
              <FlatList
                numColumns={3}
                data={this.state.listTable}
                renderItem={({ item }) => {
                  return <TableItem table={item} key={item.key} />
                }}
                keyExtractor={(item) => item.name}
              />
            </SafeAreaView>
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
