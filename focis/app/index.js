import React, { useState, useEffect } from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { AppNavigator } from './config/router';
import { Provider as Urql, createClient } from 'urql';
import { Provider } from 'react-redux';
import store from './config/store';




let Navigation = createAppContainer(AppNavigator);

//"http://142.93.11.179:4000"

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
    <Provider store={store}>
      <Urql value={client}>
        <Navigation />
      </Urql>
    </Provider>
  );
};

export default App;
