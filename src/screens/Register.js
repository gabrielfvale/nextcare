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

export default class Register extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={Style.container}>
      <StatusBar backgroundColor={colors.secondaryDark} barStyle="light-content"/>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Logo />
        </View>
        <View style={{flex: 2}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <AuthButton
            imageSrc={require('../images/google.png')}/>
          <AuthButton
            backgroundColor='#3b5998'
            imageSrc={require('../images/facebook.png')}/>
          <AuthButton
            backgroundColor='#00aced'
            imageSrc={require('../images/twitter.png')}/>
          </View>
          <TextInput 
            style={Style.input} 
            underlineColorAndroid='transparent'
            keyboardType='email-address'
            returnKeyType='next'
            placeholder='Email'
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TextInput 
            style={Style.input} 
            underlineColorAndroid='transparent'
            returnKeyType='go'
            secureTextEntry={true}
            placeholder='Senha'
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TextInput 
            style={Style.input} 
            underlineColorAndroid='transparent'
            returnKeyType='go'
            secureTextEntry={true}
            placeholder='Repetir senha'
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={[Style.button, {backgroundColor: colors.secondary}]}>
              <Text style={{color: 'white', fontSize: 16}}>REGISTRO</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
const styles = new StyleSheet.create({

});