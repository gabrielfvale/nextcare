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

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    passwordRepeated: ''
  }


  static navigationOptions = {
    header: null
  }

  onRegisterPress(){
    if(this.state.email !== '' && this.state.password !== '' && this.state.passwordRepeated !== ''){
      const {email, password, passwordRepeated} = this.state;
      if(passwordRepeated==password){
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .then(() => {this.props.navigation.navigate('Login')})
        .catch(err => {
          switch (err.message){
            case "The email address is badly formatted.":
              alert("Email invalido!");
              break;
            case "The given password is invalid. [ Password should be at least 6 characters ]":
              alert("Senha muito curta. Insira uma senha de pelo menos 6 caracteres!");
              break;
            case "The email address is already in use by another account.":
              alert("Email ja utilizado por outro usuario!");
              break;
            default:
              alert(err.message);
          }
        });
      }
      else{
        alert("Suas senhas nao coincidem!")
      }
    }
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
            onChangeText={email => this.setState({ email })}
            onPress={() => this.onRegisterPress()}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TextInput 
            style={Style.input} 
            underlineColorAndroid='transparent'
            returnKeyType='go'
            secureTextEntry={true}
            placeholder='Senha'
            onChangeText={password => this.setState({ password })}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TextInput 
            style={Style.input} 
            underlineColorAndroid='transparent'
            returnKeyType='go'
            secureTextEntry={true}
            placeholder='Repetir senha'
            onChangeText={passwordRepeated => this.setState({ passwordRepeated })}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TouchableNativeFeedback
            onPress={() => this.onRegisterPress()}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={[Style.button, {backgroundColor: colors.secondary}]}>
              <Text  style={{color: 'white', fontSize: 16}}>REGISTRO</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
const styles = new StyleSheet.create({

});
