

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Input, Icon } from 'react-native-elements';

const Login = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://focis19.s3-us-west-1.amazonaws.com/6e113411e7c6c475609d41e241d5ed54.png'}}
        style={styles.logo}
      />
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
      <TouchableOpacity onPress={() => navigation.navigate("Setup")}>
        <Text style={styles.addAccount}>Don't Have an Account?</Text>
      </TouchableOpacity>
    </View>
  )
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
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  logo: {
    height: 170,
    width: 170,
    marginBottom: 50
  },
  addAccount: {
    fontFamily: 'Avenir',
    fontSize: 15,
    color: '#fff'
  }
})

export default Login;
