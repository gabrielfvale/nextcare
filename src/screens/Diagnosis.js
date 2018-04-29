import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableNativeFeedback,
  Image,
  StatusBar
} from 'react-native';
import { dimensions, colors, padding } from '../../styles/theme'
import Style from '../../styles/styles';
import AuthButton from '../components/AuthButton';
import Logo from '../components/Logo';
import firebase from 'react-native-firebase';

export default class Diagnosis extends Component {
  //constructor(props) {
   // var symptons = [];
  //}
  render() {
    return (
      <View>
        <Text> Tela de Diagostico </Text>
      </View>
    );
  }
}
const styles = new StyleSheet.create({

});