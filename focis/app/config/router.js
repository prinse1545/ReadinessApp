import React from 'react';
import { createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import Icon from 'react-native-elements';

import Login from '../screens/externalScreens/login';
import Setup from '../screens/externalScreens/setup';
import AuthLoading from '../screens/externalScreens/authLoading';
import Metrics from '../screens/internalScreens/metrics';
import Profile from '../screens/internalScreens/profile';
import Settings from '../screens/internalScreens/settings';



const AuthStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Setup: { screen: Setup, navigationOptions: { header: null } }

});

const HomeTabs = createBottomTabNavigator({
  Metrics: Metrics,
  Profile: Profile,
  Settings: Settings
});




export const  AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: { screen: HomeTabs,
      navigationOptions: {
        header: "hi",
        gesturesEnabled: true,
    }},
    Auth: { screen: AuthStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
    }}
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
