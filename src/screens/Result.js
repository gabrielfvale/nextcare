import React, { Component } from 'react';
import {  
  StyleSheet, 
  Animated, 
  View, 
  Text, 
  Image,
  Easing, 
  StatusBar 
} from 'react-native';
import { colors, padding } from '../../styles/theme';
import Style from '../../styles/styles';
import Selectable from '../components/Selectable';

const NOR_SIZE = 128; // Tamanho padrão das faces
const SEL_SIZE = 160; // Tamanho final da face selecionada
const SELECTED = 1; // Estado passado como um prop após o diagnóstico
const ANIM_DUR = 300*(SELECTED+1); // Duração variável da animação.
const LEFT_DEF = 288 // Posição padrão da view
const LEFT_SEL = LEFT_DEF-144*SELECTED // Quanto mover a view que contém as faces.

const faceColors = ['#3F51B5', '#4CAF50', '#FFEB3B', '#FF9800', '#F44336']

export default class Result extends Component {
  constructor(props){
    super(props)
    this.animations = { 
      // Declaração de todas as animações
      imageSize: new Animated.Value(NOR_SIZE),
      moveList: new Animated.Value(LEFT_DEF),
      fade: new Animated.Value(1),
      moveTop: new Animated.Value(0),
      showComponents: new Animated.Value(0)
    }
  }
  componentDidMount() {
    // Sequência de animações a serem realizadas.
    Animated.sequence([
      Animated.timing(this.animations.moveList, {
        duration: ANIM_DUR,
        toValue: LEFT_SEL,
        easing: Easing.linear
      }),
      Animated.timing(this.animations.imageSize, {
        duration: 300,
        toValue: SEL_SIZE,
        easing: Easing.linear
      }),
      Animated.timing(this.animations.fade, {
        duration: 300,
        toValue: 0,
        easing: Easing.linear
      }),
      Animated.timing(this.animations.moveTop, {
        duration: 500,
        toValue: -200,
        easing: Easing.linear
      }),
      Animated.timing(this.animations.showComponents, {
        duration: 300,
        toValue: 1,
        easing: Easing.linear
      })
    ]).start();
  }
  render() {
    let normalStyle = [styles.secondaryFace, {opacity: this.animations.fade}];
    let selectedStyle = {
      width: this.animations.imageSize,
      height: this.animations.imageSize,
      marginHorizontal: 8,
    }
    let facePath = '../images/result/face_';

    return (
      <View style={Style.container}>
        <StatusBar backgroundColor={colors.primaryDark}/>
        <Animated.Image source={require('../images/result/arrow.png')} style={[styles.arrow, {opacity: this.animations.fade}]}/>
        <Animated.View style={{flexDirection: 'row', alignItems: 'center', left: this.animations.moveList, top: this.animations.moveTop}}>
          <Animated.Image tintColor={faceColors[0]} source={require(facePath + 'smile.png')} style={SELECTED == 0 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[1]} source={require(facePath + 'smile.png')} style={SELECTED == 1 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[2]} source={require(facePath + 'flat.png')} style={SELECTED == 2 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[3]} source={require(facePath + 'frown.png')} style={SELECTED == 3 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[4]} source={require(facePath + 'frown.png')} style={SELECTED == 4 ? selectedStyle : normalStyle}/>
        </Animated.View>
        <Animated.View style={{opacity: this.animations.showComponents}}>
          <Text>Texto referente ao estado do paciente</Text>
          <Text>{'Componente <MapView/>'}</Text>
        </Animated.View>
      </View>
    );
  }
}
const styles = new StyleSheet.create({
  arrow: {
    width: 72,
    height: 36,
    marginBottom: padding.std,
  },
  secondaryFace: {
    width: 128,
    height: 128,
    marginHorizontal: padding.sm,
  }
});