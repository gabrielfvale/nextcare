import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import { dimensions, colors, padding } from '../../styles/theme'
import Style from '../../styles/styles';
import AuthButton from '../components/AuthButton';
import Logo from '../components/Logo';
import firebase from 'react-native-firebase';



export default class Login extends Component {
  
  state = {
    email: '',
    password: ''
  }
  
  static navigationOptions = {
    header: null
  }
  
 
  onLoginPress(){
    if(this.state.email !== '' && this.state.password !== ''){
      const {email, password} = this.state;
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
       .then(() => { this.props.navigation.navigate('Diagnosis') })
       .catch(() => {alert("Email ou senha incorretos!")})
    }
  }

  render() {
    return (
      <View style={Style.container}>
        <StatusBar backgroundColor={colors.primaryDark} barStyle="light-content"/>
        <View style={{flex: 10}}>
          <View style={styles.bg_section}>
            <Logo/>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: padding.std}}>
          <AuthButton
            onPress={()=>this.props.navigation.navigate('Diagnosis')}
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
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TextInput 
            style={Style.input} 
            underlineColorAndroid='transparent'
            returnKeyType='go'
            secureTextEntry={true}
            placeholder='Senha'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
          <TouchableNativeFeedback
            onPress={() => this.onLoginPress()}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={Style.button}>
              <Text style={{color: 'white', fontSize: 16}} >LOGIN</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.sm_section}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Não possui uma conta?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  sm_section: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg_section: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
