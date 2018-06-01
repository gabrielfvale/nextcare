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
import { colors } from '../../styles/theme';

const Selectable = (props) => {
  var selected = false;
  var animValue = new Animated.Value(0);
  function animate() {
    if (!selected) {
      Animated.timing(animValue, {
        toValue: 1,
        duration: 150,
        easing: Easing.linear
      }).start();
    } else {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 150,
        easing: Easing.linear
      }).start();
    }
    selected = !selected;
  }
  const SelectableColor = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff', colors.primary]
  })
  const IconTint = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.primary, '#ffffff']
  })
  return (
    <View style={{alignItems: 'center', marginVertical: 16}}>
      <TouchableWithoutFeedback 
        onPress={() => {animate(); props.onPress()}}>
        <Animated.View style={[styles.btnWrapper, {backgroundColor: SelectableColor}]}>
          <Animated.Image tintColor={IconTint} source={props.icon} style={styles.image}/>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Text style={{marginTop: 8}}>{props.title}</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  image: {
    width: 70,
    height: 70
  },
  btnWrapper: {
    borderRadius: 100,
    borderWidth: 4,
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0,150,136,1)',
    marginHorizontal: 12,
    },
});

export default Selectable;