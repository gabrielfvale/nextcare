import React, { Component } from 'react';
import {  
  StyleSheet, 
  Animated, 
  View, 
  Text, 
  Image,
  Easing, 
  StatusBar,
  AsyncStorage 
} from 'react-native';
import { colors, padding, dimensions } from '../../styles/theme';
import Style from '../../styles/styles';
import Selectable from '../components/Selectable';
import FullMap from '../screens/FullMap';

const faceColors = ['#3F51B5', '#4CAF50', '#FFEB3B', '#FF9800', '#F44336']
const RESULT_TEXT = [
  'Está tudo bem!',
  'Não há urgência!',
  'Ir à um hospital é recomendado.',
  'ALTO RISCO.',
  'ALTÍSSIMO RISCO.'
]
export default class Result extends Component {
  constructor(props){
    super(props)
    this.SELECTED =this.props.navigation.state.params.result;
    this.animations = { 
      // Declaração de todas as animações
      imageSize: new Animated.Value(128),
      moveList: new Animated.Value(288),
      fade: new Animated.Value(1),
      moveTop: new Animated.Value(0),
      showComponents: new Animated.Value(0),
    };
    this.text = RESULT_TEXT[this.SELECTED];
  }
  componentDidMount() {
    let NOR_SIZE = 128; // Tamanho padrão das faces
    let SEL_SIZE = 160; // Tamanho final da face selecionada
    let ANIM_DUR = 300*(this.SELECTED+1); // Duração variável da animação.
    let LEFT_DEF = 288; // Posição padrão da view
    let LEFT_SEL = LEFT_DEF-144*this.SELECTED // Quanto mover a view que contém as faces.
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
        toValue: -100,
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
    let SELECTED = this.SELECTED;
    return (    
      <View style={[Style.container, {justifyContent: 'flex-end'}]}>
        <StatusBar backgroundColor={colors.primaryDark}/>
        <Animated.Image source={require('../images/result/arrow.png')} style={[styles.arrow, {opacity: this.animations.fade}]}/>
        <Animated.View style={{flexDirection: 'row', alignItems: 'center', left: this.animations.moveList, top: this.animations.moveTop}}>
          <Animated.Image tintColor={faceColors[0]} source={require(facePath + 'smile.png')} style={SELECTED == 0 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[1]} source={require(facePath + 'smile.png')} style={SELECTED == 1 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[2]} source={require(facePath + 'flat.png')} style={SELECTED == 2 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[3]} source={require(facePath + 'frown.png')} style={SELECTED == 3 ? selectedStyle : normalStyle}/>
          <Animated.Image tintColor={faceColors[4]} source={require(facePath + 'frown.png')} style={SELECTED == 4 ? selectedStyle : normalStyle}/>
        </Animated.View>
        <Animated.View style={{opacity: this.animations.showComponents, bottom: 0, alignItems: 'center',}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: padding.sm}}>{this.text}</Text>
          <Text style={{marginBottom: padding.sm}}>Veja hospitais próximos de você: </Text>
          <View style={{width: dimensions.fullWidth, height: dimensions.fullHeight/3}}>
            <FullMap/>
          </View>
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