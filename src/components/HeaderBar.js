import React, { Component } from 'react';
import { StyleSheet, Alert,TouchableOpacity, Image, View, Text, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HeaderBar extends React.Component {

   constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidCatch() {
  }


  handleGoBack = () => {
    Actions.pop();
  }

  handleLogout = () => {
    Alert.alert("Alert", "Button presses LOGOUT");
  }


  render() {
    const {
      hasGoBack,
      hasLogout,
      titleHeader,
      opacity: opacityValue
    } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.left}>
          {hasGoBack &&
            <TouchableOpacity onPress={this.handleGoBack}>
              <Image
                source={require('../assets/images/icon-go-back.png')}
                style={styles.menu} resizeMode="contain"
              />
            </TouchableOpacity>
          }
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{titleHeader}</Text>
        </View>
        <View style={styles.right}>
          {hasLogout &&
            <TouchableOpacity onPress={this.handleLogout}>
              <Image
                source={require('../assets/images/icon-logout.png')}
                style={styles.menu} resizeMode="contain"
              />
            </TouchableOpacity>
          }
          </View>
      </View>
    );
  }
}

export default HeaderBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomWidth: 0.25,
    backgroundColor: '#25403B',
    ...Platform.select({
      ios: {
        height:64,
        paddingTop: 30,
      },
      android: {
        height: 56,
        paddingTop: 10,
      },
    }),
  },
  left: {
    alignSelf: 'flex-start',
    marginHorizontal: 8,
    ...Platform.select({
      android: {
        marginTop: 6
      },
    }),
    width: 24
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    alignSelf: 'center'
  },
  right: {
    alignSelf: 'flex-start',
    marginHorizontal: 8,
    ...Platform.select({
      android: {
        marginTop: 6
      },
    }),
    width: 24
  },
  menu: {
    width: 24,
    height: 24
  },
  image: {
    width: 158,
    height: 33,
  },
  right: {
    alignSelf: 'flex-start',
    marginHorizontal: 8,
    ...Platform.select({
      android: {
        marginTop:6
      },
    }),
    width: 24
  },
});
