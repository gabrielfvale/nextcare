import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from 'react-navigation';

import Login from './screens/Login';
import Register from './screens/Register';
import Diagnosis from './screens/Diagnosis';
import Result from './screens/Result';

export const SignedOut = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register }
  },
  {headerMode: 'none', navigationOptions: {headerVisible: false}
});

export const createSignedIn = (doneResult = false) => {
  return StackNavigator(
  {
    Diagnosis: { screen: Diagnosis },
    Result: { screen: Result },
  },
  {
    initialRouteName: doneResult ? 'Result' : 'Diagnosis',
    headerMode: 'none', navigationOptions: {headerVisible: false}
  },
  
);
};

export const createRootNavigator = (signedIn = false, doneResult = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: createSignedIn(doneResult)
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
};