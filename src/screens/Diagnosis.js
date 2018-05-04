import React, { Component } from 'react';
import {  StyleSheet, View, Text, TouchableNativeFeedback, StatusBar } from 'react-native';
import { colors, dimensions, padding } from '../../styles/theme';
import Style from '../../styles/styles';
import Selectable from '../components/Selectable';

export default class Diagnosis extends Component {
  render() {
    let iconPath = '../images/diagnosis/';
    return (
      <View style={Style.container}>
      <StatusBar backgroundColor={colors.primaryDark}/>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Selectable title='Troca de curativos' icon={require(iconPath + 'bandage.png')}/>
          <Selectable title='Enxaqueca' icon={require(iconPath + 'headache.png')}/>
          <Selectable title='Arritimia' icon={require(iconPath + 'heart.png')}/>
        </View>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <View style={{width: dimensions.fullWidth, height: 40, backgroundColor: colors.primary, alignItems: 'flex-end'}}>
            <TouchableNativeFeedback>
              <View style={{height: 40, width: 96, backgroundColor: colors.primaryDark, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>PROXIMO</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}