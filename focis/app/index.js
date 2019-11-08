import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { AppNavigator } from './config/router';


let Navigation = createAppContainer(AppNavigator);

const App = (props) => {
  return (
    <Navigation />
  );
};

export default App;
