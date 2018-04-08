import React, { Component } from 'react';
import {  StyleSheet, View, Text, TouchableNativeFeedback, Image} from 'react-native';
import PropTypes from 'prop-types';
import { dimensions, padding } from '../../../styles/theme';

export default class AuthButton extends Component {
  render() {
    return (
        <TouchableNativeFeedback
            onClick={this.props.onClick}
            background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={[styles.btnWrapper, {backgroundColor: this.props.backgroundColor}]}>
            <Image style={styles.image} source={this.props.imageSrc}/>
            <Text style={[styles.btnText, {color: this.props.textColor}]}>{this.props.text}</Text>
        </View>
    </TouchableNativeFeedback>
    );
  }
}
AuthButton.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func
  };
AuthButton.defaultProps = {
    backgroundColor: 'white',
    textColor: 'black',
    onClick: function(){  }
  };
const styles = new StyleSheet.create({
    image: {
        width: dimensions.icon_std,
        height: dimensions.icon_std
    },
    btnWrapper: {
        width: dimensions.fullWidth - 40,
        height: 56,
        alignItems: 'center',
        marginBottom: padding.std,
        paddingLeft: padding.std,
        flexDirection: 'row',
    },
    btnText: {
        color: 'black',
        flex: 1,
        paddingRight: 34,
        textAlign: 'center',
        fontSize: 18,
    },
});
