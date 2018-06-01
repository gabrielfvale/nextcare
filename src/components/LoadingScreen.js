import React from 'react';
import {  View, ActivityIndicator, StatusBar } from 'react-native';
import { colors } from '../../styles/theme';
import Theme from '../../styles/styles';

const LoadingScreen = () => (
  <View style={Theme.container}>
    <StatusBar backgroundColor={colors.primaryDark}/>
    <ActivityIndicator color={colors.primary} size='large'/>
  </View>
);

export default LoadingScreen;