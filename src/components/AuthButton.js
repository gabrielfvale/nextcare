import React, { Component } from 'react';
import {  StyleSheet, View, Text, TouchableNativeFeedback, Image} from 'react-native';
import PropTypes from 'prop-types';
import { dimensions, padding } from '../../styles/theme';

export default class AuthButton extends Component {
  render() {
    return (
    <TouchableNativeFeedback
      onPress={this.props.onPress}
      background={TouchableNativeFeedback.Ripple(this.props.backgroundColor, true)}>
      <View style={[styles.btnWrapper, {backgroundColor: this.props.backgroundColor}]}>
        <Image style={styles.image} source={this.props.imageSrc}/>
      </View>
    </TouchableNativeFeedback>
    );
  }
}
// Valores default para o AuthButton
AuthButton.propTypes = {
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func
};
AuthButton.defaultProps = {
  backgroundColor: 'white',
  onPress: () => {console.log('AuthButton pressionado')}
};
const styles = new StyleSheet.create({
  image: {
    width: dimensions.icon_std,
    height: dimensions.icon_std
  },
  btnWrapper: {
    borderRadius: 56,
    width: dimensions.btn_std,
    height: dimensions.btn_std,
    alignItems: 'center',
    justifyContent: 'center',
    margin: padding.sm,
    elevation: 1,
    },
});
