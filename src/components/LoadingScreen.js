import React, { Component } from 'react';
import {  View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { colors } from '../../styles/theme';
import Theme from '../../styles/styles';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={Theme.container}>
        <StatusBar backgroundColor={colors.primaryDark}/>
        <ActivityIndicator color={colors.primary} size='large'/>
      </View>
    );
  }
}
