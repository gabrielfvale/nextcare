import React, { Component } from 'react';
import {  StyleSheet, View, Text, TouchableNativeFeedback, StatusBar, ViewPagerAndroid, Switch } from 'react-native';
import { colors, dimensions, padding } from '../../styles/theme';
import Style from '../../styles/styles';
import Selectable from '../components/Selectable';
import Symptoms from '../symptoms.json';

export default class Diagnosis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      symptoms: Symptoms.data,
      userClassification: 0
    }
  }

  selectSymptom(id){
    //Altera o status de isSelected de um sintoma em Symptoms
    this.state.symptoms[id-1].isSelected == 'False'? this.state.symptoms[id-1].isSelected = 'True': this.state.symptoms[id-1].isSelected = 'False';
  }

  calculateResult(){
    //Estado inicial da classificacao
    let result = 0;
    //Verifica se o estado nao foi alterado
    //Para eliminar risco de nao detectar que todos foram desmarcados
    let empty=true; 
    for(let cont2=0; cont2 < 19; cont2++){
        //Verifica se ao menos um esta marcado
        if(this.state.symptoms[cont2].isSelected == 'True'){
          empty = false;
        }
    }
    if(empty){
      result = 0;
    }
    else{
      for(let cont=0; cont < 19; cont++){
        if(this.state.symptoms[cont].cat > result && this.state.symptoms[cont].isSelected == 'True'){
          result = this.state.symptoms[cont].cat;
        }
      }
    }
    this.setState((previousState) => {
      //Se todos estao desmarcados, a classificacao e zero
      this.state.userClassification = result;
      alert(this.state.userClassification);
    })
  }

  render() {
    let iconPath = '../images/diagnosis/';
    
    return (
      <ViewPagerAndroid style={Style.container} initialPage={0} ref={viewPager => { this.viewPager = viewPager}}>
        
        <View style={Style.container} key="0">
        <StatusBar backgroundColor={colors.primaryDark}/>
          <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Text >Idoso(a), Gestante ou Deficiente: </Text>
            <Switch
              onValueChange={()=>{
                this.state.symptoms[18].isSelected == 'False'? this.state.symptoms[18].isSelected = 'True':this.state.symptoms[18].isSelected = 'False';}
              }
            />
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            { this.state.symptoms.slice(0, 9).map((item) =>{
              return <Selectable key={item.id} select={()=>{this.selectSymptom(item.id)}} title={item.name} icon={{uri: 'asset:/' + item.image}}/>
            })}
          </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <View style={{width: dimensions.fullWidth, height: 40, backgroundColor: colors.primary, alignItems: 'flex-end'}}>
              <TouchableNativeFeedback>
                <View style={{height: 40, width: 96, backgroundColor: colors.primaryDark, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white'}} onPress={() => this.viewPager.setPage(1)}>PROXIMO</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
        <View style={Style.container} key="1">
        <StatusBar backgroundColor={colors.primaryDark}/>
          <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            { this.state.symptoms.slice(9 , 18).map((item) =>{
              return <Selectable key={item.id} select={()=>{this.selectSymptom(item.id)}} title={item.name} icon={{uri: 'asset:/' + item.image} }/>
            })}
          </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <View style={{width: dimensions.fullWidth, height: 40, backgroundColor: colors.primary,flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableNativeFeedback>
                <View style={{height: 40, width: 96, backgroundColor: colors.primaryDark, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white'}} onPress={() => this.viewPager.setPage(0)}>ANTERIOR</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View style={{height: 40, width: 96, backgroundColor: colors.primaryDark, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white'}} onPress={() => this.calculateResult()}>FINALIZAR</Text>
                </View>
              </TouchableNativeFeedback>
            
            </View>
          </View>
        </View>
        
      </ViewPagerAndroid>
    );
  }
}
