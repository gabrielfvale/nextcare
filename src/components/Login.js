import React, { Component } from 'react';
import {
    StyleSheet, 
    View, 
    KeyboardAvoidingView, 
    Text, 
    TextInput, 
    TouchableNativeFeedback,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';
import { dimensions, colors, padding } from '../../styles/theme'
import AuthButton from '../components/Button/AuthButton';
import Style from '../../styles/styles';

export default class Login extends Component {
  render() {
    return (
        <View style={Style.container}>
            <StatusBar backgroundColor={colors.primaryDark} barStyle="light-content"/>
            <View style={styles.bg_section}>
                <Image tintColor='#424242' source={require('../images/logo.png')} style={{width: dimensions.fullWidth - 56, height: (dimensions.fullWidth - 56)/3}}/>
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
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={Style.button}>
                        <Text style={{color: 'white', fontSize: 16}}>LOGIN</Text>
                    </View>
                </TouchableNativeFeedback>
            </KeyboardAvoidingView>
            <View style={styles.sm_section}>
                <TouchableOpacity onPress={this._onPressButton}>
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
