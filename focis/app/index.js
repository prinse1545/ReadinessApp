import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { AppNavigator } from './config/router';
import { Provider, createClient } from 'urql';

const client = createClient({
  url: "http://localhost:4000"
})


let Navigation = createAppContainer(AppNavigator);

const App = (props) => {
  return (
    <Provider value={client}>
      <Navigation />
    </Provider>
  );
};

export default App;
