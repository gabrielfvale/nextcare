import React, { Component } from 'react';
import {  
  StyleSheet, 
  View, 
  Text, 
  TouchableWithoutFeedback, 
  Image, 
  Animated,
  Easing 
} from 'react-native';

export default class Selectable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      selected: new Animated.Value(0),
      border: new Animated.Value(4)
    }

  }
  _onSelectablePress() {
    // Altera o estado isSelected to componente
    this.setState((previousState) => {
      this.state.isSelected = !previousState.isSelected;
    })
    var selectedValue = 0;
    var borderValue = 4;
    if (!this.state.isSelected){
      selectedValue = 1;
      borderValue = 0;
    }
    Animated.parallel([
      Animated.timing(this.state.selected, {
        duration: 200,
        toValue: selectedValue,
        easing: Easing.linear
      }),
      Animated.timing(this.state.border, {
        duration: 200,
        toValue: borderValue,
        easing: Easing.linear
      })
    ]).start();
  }
  render() {
    const SelectableColor = this.state.selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0,0,0,0)', 'rgba(0,150,136,1)']
    })
    const iconTint = this.state.selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(0,150,136)', 'rgb(255,255,255)']
    })
    return (
      <View style={{alignItems: 'center', marginVertical: 16}}>
        <TouchableWithoutFeedback 
          onPress={() => {this.props.select(); this._onSelectablePress()}}>
          <Animated.View style={[styles.btnWrapper, {backgroundColor: SelectableColor, borderWidth: this.state.border,}]}>
          <Animated.Image tintColor={iconTint} source={this.props.icon} style={styles.image}/>
          </Animated.View>
        </TouchableWithoutFeedback>
        <Text style={{marginTop: 8}}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = new StyleSheet.create({
  image: {
    width: 70,
    height: 70
  },
  btnWrapper: {
    borderRadius: 100,
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0,150,136,1)',
    marginHorizontal: 12,
    },
});