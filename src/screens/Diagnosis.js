import React, { Component } from 'react';
import {  
  StyleSheet, 
  View, 
  Text, 
  TouchableNativeFeedback, 
  StatusBar, 
  ViewPagerAndroid, 
  Switch, 
  AsyncStorage, 
  Button,
  PermissionsAndroid 
} from 'react-native';
import { colors, dimensions, padding } from '../../styles/theme';
import Style from '../../styles/styles';
import Selectable from '../components/Selectable';
import Symptoms from '../symptoms.json';
import {doneResult, addResult, removeResult} from '../async';
import LoadingScreen from '../components/LoadingScreen';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.show('Location permission granted', ToastAndroid.SHORT)
    } else {
      ToastAndroid.show('Location permission denied', ToastAndroid.SHORT)
    }
  } catch (err) {
    console.warn(err)
  }
}
var symptoms = [...Symptoms.data];
export default class Diagnosis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symptoms: Symptoms.data,
      userClassification: 0,
      hasResult: false,
      hasCheckedResult: false
    }
  }

  componentDidMount(){
    requestLocationPermission();
    doneResult()
    .then(res => this.setState({ hasResult: res, hasCheckedResult: true}));
  }

  selectSymptom(id) {
    symptoms[id].isSelected = !symptoms[id].isSelected;
  }

  calculateResult() {
    //Estado inicial da classificacao
    var result = 0;
    //Verifica se o estado nao foi alterado
    //Para eliminar risco de nao detectar que todos foram desmarcados
    var empty = true; 
    for(var cont=0; cont < 19; cont++){
      //Verifica se ao menos um esta marcado
      if(symptoms[cont].isSelected) {
        empty = false;
      }
    }
    if(empty){
      result = 0;
    }
    for(var cont=0; cont < 19; cont++){
      if(symptoms[cont].cat > result && symptoms[cont].isSelected){
        result = symptoms[cont].cat;
      }
    }
    this.props.navigation.navigate('Result', { result })
  }
  render() {
    if(!this.state.hasCheckedResult){
      return <LoadingScreen/>;
    }
    else {
      let iconPath = '../images/diagnosis/';
      return(
      <ViewPagerAndroid 
        style={Style.container} 
        initialPage={0} 
        ref={viewPager => { this.viewPager = viewPager}}>
        <View style={Style.container} key='0'>
          <StatusBar backgroundColor={colors.primaryDark}/>
          <View style={Style.container}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.state.symptoms.slice(0, 9).map((item, index) =>{
              return <Selectable 
                key={index+9} 
                onPress={()=> this.selectSymptom(index)} 
                title={item.name} 
                icon={{uri: 'asset:/' + item.image}}/>
              })}
            </View>
          </View>
        </View>
        <View style={Style.container} key='1'>
          <StatusBar backgroundColor={colors.primaryDark}/>
          <View style={Style.container}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {this.state.symptoms.slice(9, 18).map((item, index) =>{
                return <Selectable 
                  key={index+9} 
                  onPress={()=> this.selectSymptom(index+9)} 
                  title={item.name} 
                  icon={{uri: 'asset:/' + item.image}}/>
              })}
            </View>
            <View style={{position: 'absolute', bottom: 16,}}>
              <Button title='finalizar' onPress={() => this.calculateResult()}/>
            </View>
          </View>
        </View>         
      </ViewPagerAndroid>
    );
    }
  }
}