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
    <View style={styles.container}>
    <View style={{flex: 2}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior='padding'>
        <View style={styles.logoSection}>
            <Text style={{fontSize: 40, color: 'white'}}>HealthApp</Text>
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
            secureTextEntry={true}
            placeholder='Senha'
            placeholderTextColor='rgba(0, 0, 0, 0.6)'/>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.loginBtn}>
                <Text style={{color: 'white', fontSize: 16}}>LOGIN</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
      </KeyboardAvoidingView>
    </View>
    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
        <AuthButton
            imageSrc={require('../images/google.png')}/>
        <AuthButton
            backgroundColor='#3b5998'
            imageSrc={require('../images/facebook.png')}/>
        <AuthButton
            backgroundColor='#00aced'
            imageSrc={require('../images/twitter.png')}/>
    </View>
    </View>
    );
  }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: dimensions.fullWidth - 40,
        height: 56,
        paddingLeft: padding.std,
    },
    loginBtn: {
        backgroundColor: colors.secondary,
        width: dimensions.fullWidth - 40,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
