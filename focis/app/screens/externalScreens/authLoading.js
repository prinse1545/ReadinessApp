import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import Pulse from 'react-native-pulse';
// import NetInfo from "@react-native-community/netinfo";
// import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends Component {
  constructor(props) {
    super(props);

    const authenticated = false;

    if(authenticated) {
      this.props.navigation.navigate("App")
    }
    else {
      this.props.navigation.navigate("Auth")
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Pulse color='#D80024' numPulses={10} diameter={230} speed={5} duration={2000} image={{style: {height: 120, width: 120, marginLeft: '23.5%', marginTop: '25.5%'}, source: {uri: 'https://focis19.s3-us-west-1.amazonaws.com/6e113411e7c6c475609d41e241d5ed54.png'}}} />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035096',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AuthLoading;
