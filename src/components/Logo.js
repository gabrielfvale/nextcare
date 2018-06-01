import React from 'react';
import { Image } from 'react-native';
import { dimensions } from '../../styles/theme';

const Logo = () => (
  <Image 
    tintColor='#424242' 
    source={require('../images/logo.png')} 
    style={{width: dimensions.fullWidth - 56, height: (dimensions.fullWidth - 56)/3}}/>
);

export default Logo;