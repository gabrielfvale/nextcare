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
            placeholderTextColor='rgba(0, 0, 0, 0.5)'/>
        <TextInput 
            style={styles.input} 
            underlineColorAndroid='transparent'
            returnKeyType='go'
            placeholder='Senha'
            placeholderTextColor='rgba(0, 0, 0, 0.5)'/>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </View>
        </TouchableNativeFeedback>
        <Text style={{color: 'white', padding: 16}}>OU</Text>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.googlePlaceholder}>
            <Image style={{width: 34, height: 34}} source={require('../images/google.png')}/>
            <Text style={styles.googleText}>Entre com o Google</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.facebookPlaceholder}>
                <Image style={{width: 34, height: 34}} source={require('../images/facebook.png')}/>
                <Text style={styles.facebookText}>Entre com o Facebook</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E88E5',
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
        width: 360,
        height: 60,
        paddingLeft: 16,
    },
    loginBtn: {
        backgroundColor: '#1565C0',
        width: 360,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: 'white'
    },
    googlePlaceholder: {
        backgroundColor: 'white',
        width: 360,
        height: 60,
        alignItems: 'center',
        marginBottom: 16,
        paddingLeft: 16,
        flexDirection: 'row',
    },
    googleText: {
        color: 'black',
        flex: 1,
        paddingRight: 34,
        textAlign: 'center',
    },
    facebookText: {
        color: 'white',
        flex: 1,
        paddingRight: 34,
        textAlign: 'center',
    },
    facebookPlaceholder: {
        backgroundColor: '#3b5998',
        width: 360,
        height: 60,
        alignItems: 'center',
        marginBottom: 16,
        paddingLeft: 16,
        flexDirection: 'row',
    },
});
