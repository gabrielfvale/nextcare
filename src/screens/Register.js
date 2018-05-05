import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableNativeFeedback,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { dimensions, colors, padding } from '../../styles/theme'
import Style from '../../styles/styles';
import SocialAuth from '../components/SocialAuth';
import Logo from '../components/Logo';
import firebase from 'react-native-firebase';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordRepeated: '',
      isLoading: false,
    }
  }

  static navigationOptions = {
    header: null
  }

  _onRegisterPress(){
    this.setState({isLoading: true});
    if(this.state.email !== '' && this.state.password !== '' && this.state.passwordRepeated !== ''){
      const {email, password, passwordRepeated} = this.state;
      if(passwordRepeated==password){
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .then(() => {this.props.navigation.navigate('Login')})
        .catch(err => {
          switch (err.message){
            case "The email address is badly formatted.":
              alert('Email invalido!');
              break;
            case "The given password is invalid. [ Password should be at least 6 characters ]":
              alert('Senha muito curta. Insira uma senha de pelo menos 6 caracteres!');
              break;
            case "The email address is already in use by another account.":
              alert('Email ja utilizado por outro usuario!');
              break;
            default:
              alert(err.message);
          };
          this.setState({isLoading: false});
        });
      }
      else{
        alert('Suas senhas nao coincidem!');
        this.setState({isLoading: false});
      }
    } else {
      alert('Campos vazios')
    }
  }

  render() {
    return (
      <View style={Style.container}>
      <StatusBar backgroundColor={colors.secondaryDark} barStyle="light-content"/>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Logo />
        </View>
        <View style={{flex: 2}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: padding.std}}>
          <SocialAuth/>
          </View>
          <TextInput 
            style={Style.input} 
            underlineColorAndroid='transparent'
            autoCapitalize='none'
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            keyboardType='email-address'
            returnKeyType='next'
            placeholder='Email'
            onChangeText={email => this.setState({ email })}
            onPress={() => this.onRegisterPress()}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TextInput
            ref={(input) => { this.secondTextInput = input; }} 
            style={Style.input} 
            underlineColorAndroid='transparent'
            autoCapitalize='none'
            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
            returnKeyType='next'
            secureTextEntry={true}
            placeholder='Senha'
            onChangeText={password => this.setState({ password })}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TextInput 
            ref={(input) => { this.thirdTextInput = input; }}
            style={Style.input} 
            underlineColorAndroid='transparent'
            autoCapitalize='none'
            onSubmitEditing={() => this._onRegisterPress()}
            returnKeyType='send'
            secureTextEntry={true}
            placeholder='Repetir senha'
            onChangeText={passwordRepeated => this.setState({ passwordRepeated })}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TouchableNativeFeedback
            onPress={() => this._onRegisterPress()}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={[Style.button, {backgroundColor: colors.secondary}]}>
              <Text style={{color: 'white', fontSize: 16}}>{!this.state.isLoading ? 'REGISTRO' : ' '}</Text>
              <ActivityIndicator 
                size='small' 
                color='white' 
                style={{position: 'absolute', opacity: this.state.isLoading ? 1.0 : 0.0}}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
const styles = new StyleSheet.create({

});
