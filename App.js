import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Diagnosis from './src/screens/Diagnosis';
import firebase from 'react-native-firebase';
import { createRootNavigator } from './src/router';
import { doneResult } from './src/async';
import LoadingScreen from './src/components/LoadingScreen';

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
      checkResult: false,
      doneResult: false
    };
  }
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
    doneResult()
    .then(res => this.setState({ doneResult: res, checkResult: true }))
    .catch(err => alert('Ocorreu um erro'));
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    const { user, checkResult, doneResult } = this.state;
    if (!checkResult) {
      return <LoadingScreen/>;
    }
    const Layout = createRootNavigator(user, doneResult);
    return <Layout />;
  }
}

const styles = StyleSheet.create({

});
