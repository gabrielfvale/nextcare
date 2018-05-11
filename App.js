import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Diagnosis from './src/screens/Diagnosis';
import firebase from 'react-native-firebase';

const Nav = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  Diagnosis: {screen: Diagnosis}
  },
  {initialRouteName: 'Login'},
  {headerMode: 'none', navigationOptions: {headerVisible: false}}
);

export default class App extends React.Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }
  componentWillMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {

    if (!this.state.user) {
      return <Nav />;
    }
    else {
      return (
        <Diagnosis/>
      );
    }
  }
}

const styles = StyleSheet.create({

});
