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
import AuthLoading from '../screens/externalScreens/authLoading';
import Profile from '../screens/internalScreens/profile';
import Settings from '../screens/internalScreens/settings';
import Readiness from '../screens/internalScreens/questionScreens/readiness';
import Fatigue from '../screens/internalScreens/questionScreens/fatigue';
import Soreness from '../screens/internalScreens/questionScreens/soreness';
import MentalStress from '../screens/internalScreens/questionScreens/mentalStress';
import Nutrition from '../screens/internalScreens/questionScreens/nutrition';



const AuthStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } }

});

const HomeTabs = createStackNavigator({
  Profile: {screen: Profile, navigationOptions: { header: null }},
  Settings: {screen: Settings, navigationOptions: { header: null }},
  Readiness: {screen: Readiness, navigationOptions: { header: null }},
  Fatigue: {screen: Fatigue, navigationOptions: { header: null }},
  Soreness: {screen: Soreness, navigationOptions: { header: null }},
  MentalStress: {screen: MentalStress, navigationOptions: { header: null }},
  Nutrition: {screen: Nutrition, navigationOptions: { header: null }}
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
