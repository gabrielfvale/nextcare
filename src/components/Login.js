import React, { Component } from 'react';
import {
    StyleSheet, 
    View, 
    KeyboardAvoidingView, 
    Text, 
    TextInput, 
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native';
import { dimensions, colors, padding } from '../../styles/theme'
import AuthButton from '../components/Button/AuthButton';

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: colors.secondary, height: 24, width: dimensions.fullWidth}}>
            </View>
            <View style={styles.bg_section}>
                <Text style={{color: 'white', fontSize: 40,}}>HealthApp</Text>
            </View>
            <KeyboardAvoidingView
                    style={{flex: 5}}
                    behavior='padding'>
                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: padding.std}}>
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
            </KeyboardAvoidingView>
            <View style={styles.sm_section}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={{color: 'white'}}>Não possui uma conta?</Text>
                </TouchableOpacity>
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
