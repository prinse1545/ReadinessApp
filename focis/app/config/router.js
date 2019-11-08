import React from 'react';
import { createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack';

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import Login from '../screens/externalScreens/login';
import Setup from '../screens/externalScreens/setup';



const AuthStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Setup: { screen: Setup, navigationOptions: { header: null } }

});

const HomeStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } }
});




export const  AppNavigator = createSwitchNavigator(
  {
    App: { screen: HomeStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
    }},
    Auth: { screen: AuthStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
    }}
  },
  {
    initialRouteName: 'Auth',
  }
);
