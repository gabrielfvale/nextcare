import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Nav = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register}
  },
  {initialRouteName: 'Login'},
  {headerMode: 'none', navigationOptions: {headerVisible: false}}
);

export default class App extends React.Component {
  render() {
    return (
      <Nav/>
    );
  }
}

const styles = StyleSheet.create({

});
