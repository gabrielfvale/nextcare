import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableNativeFeedback,
  Image,
  Button,
  StatusBar
} from 'react-native';
import { dimensions, colors, padding } from '../../styles/theme'
import Style from '../../styles/styles';
import AuthButton from '../components/AuthButton';
import Logo from '../components/Logo';
import firebase from 'react-native-firebase';

export default class Diagnosis extends Component {
  _onLogoutPress() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar backgroundColor={colors.primaryDark}/>
        <Text>Seja bem vindo, {this.props.userEmail}</Text>
        <Button color={colors.primary} title='LOGOUT' onPress={() => this._onLogoutPress()}/>
      </View>
    );
  }
}
const styles = new StyleSheet.create({

});