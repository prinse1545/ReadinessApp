

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import { Input, Icon } from 'react-native-elements';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
         style={styles.input}
         placeholder="School Email"
         placeholderTextColor="#fff"
        />
        <TextInput
         style={styles.input}
         placeholder="Password"
         placeholderTextColor="#fff"
         autoCompleteType="password"
         secureTextEntry
        />
        <Text>Don't Have an Account?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035096',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    fontFamily: 'Avenir',
    color: 'white',
    fontSize: 22,
    backgroundColor: "transparent",
    borderRadius: 10,
    width: '80%',
    borderBottomColor: '#fff'
  }
})

export default Login;
