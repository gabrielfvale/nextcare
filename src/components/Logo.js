import React, { Component } from 'react';
import {  StyleSheet, Image } from 'react-native';
import { dimensions } from '../../styles/theme';

export default class Logo extends Component {
  render() {
    return (
      <Image tintColor='#424242' source={require('../images/logo.png')} style={{width: dimensions.fullWidth - 56, height: (dimensions.fullWidth - 56)/3}}/>
    );
  }
}
