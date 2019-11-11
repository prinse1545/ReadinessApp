import React, { useState, useEffect } from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { AppNavigator } from './config/router';
import { getToken } from './config/token'
import { Provider, createClient } from 'urql';




let Navigation = createAppContainer(AppNavigator);



const App = (props) => {

  const [token, setToken] = useState(null)

  useEffect(() => {

    AsyncStorage.getItem('focis-auth-token').then((res) => {

      setToken(res)
    })
  })

  const client = createClient({
    url: "http://localhost:4000",
    fetchOptions: {
      headers: {
        Authorization: `${token}`,
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
