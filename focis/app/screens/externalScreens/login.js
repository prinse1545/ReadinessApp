

import React, { useState } from 'react';
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
import { useMutation } from 'urql';
import { Input, Icon, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const login = `
mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    player {
      id
      email
    }
  }
}
`

const Login = ({navigation}) => {

  const [email, setEmail] = useState(null)

  const [password, setPassword] = useState(null)

  const [loading, setLoading] = useState(false)

  const [result, executeMutation] = useMutation(login)

  const onLoginPress = () => {

    executeMutation({email: email, password: password}).then((result) => {

      if(result.fetching) {
        setLoading(true)
      }
      else if(result.error) {
        console.log(result)
      }
      else if(result.data) {
        AsyncStorage.setItem("focis-auth-token", result.data.login.token)
        navigation.navigate('App')
      }

    }).catch((err) => console.log(err))


    setPassword(null)
    setEmail(null)
    setLoading(false)
  }

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
       onChangeText={(text) => setEmail(text)}
      />
      <TextInput
       style={styles.input}
       placeholder="Password"
       placeholderTextColor="#fff"
       autoCompleteType="password"
       secureTextEntry={true}
       onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Setup")}>
        <Text style={styles.addAccount}>Don't Have an Account?</Text>
      </TouchableOpacity>
      <Button
       title="Log In"
       onPress={onLoginPress}
       loading={loading}
       buttonStyle={styles.button}
       containerStyle={styles.buttonContainer}
      />
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
  },
  button: {
    width: 150,
    borderRadius: 30,
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  buttonContainer: {
    marginTop: 20
  }
})

export default Login;
