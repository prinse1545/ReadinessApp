import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { AppNavigator } from './config/router';
import { getToken } from './config/token'
import { Provider, createClient } from 'urql';




let Navigation = createAppContainer(AppNavigator);

const App = (props) => {
  const client = createClient({
    url: "http://localhost:4000",
    fetchOptions: {
      headers: {
        Authorization: `bearer ${getToken()}`,
      }
    }
  })

  return (
    <Provider value={client}>
      <Navigation />
    </Provider>
  );
};

export default App;
