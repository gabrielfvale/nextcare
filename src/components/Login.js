import React, { Component } from 'react';
import {
    StyleSheet, 
    View, 
    KeyboardAvoidingView, 
    Text, 
    TextInput, 
    TouchableNativeFeedback,
    Image,
} from 'react-native';
import { dimensions, colors, padding } from '../../styles/theme'
import AuthButton from '../components/Button/AuthButton';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.container}>
        <View style={styles.logoSection}>
        <Text style={{fontSize: 40, color: 'white'}}>healthapp</Text>
        </View>
        <View style={styles.loginForm}>
        <TextInput 
            style={styles.input} 
            underlineColorAndroid='transparent'
            keyboardType='email-address'
            returnKeyType='next'
            placeholder='Email'
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
        <TextInput 
            style={styles.input} 
            underlineColorAndroid='transparent'
            returnKeyType='go'
            placeholder='Senha'
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.loginBtn}>
                <Text style={{color: 'white', fontSize: 16}}>LOGIN</Text>
            </View>
        </TouchableNativeFeedback>
        <Text style={{color: 'white', padding: 16}}>OU</Text>
        <AuthButton
            text='Entre com o Google'
            imageSrc={require('../images/google.png')}/>
        <AuthButton
            text='Entre com o Facebook'
            textColor='white'
            backgroundColor='#3b5998'
            imageSrc={require('../images/facebook.png')}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 24,
    },
    logoSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: dimensions.fullWidth - 40,
        height: 60,
        paddingLeft: padding.std,
    },
    loginBtn: {
        backgroundColor: colors.secondary,
        width: dimensions.fullWidth - 40,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
