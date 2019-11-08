import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import Pulse from 'react-native-pulse';
import NetInfo from "@react-native-community/netinfo";
// import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connection: null
    }

    const authenticated = true;

    if(authenticated) {
      this.setState({connection: "⚡Logging In⚡"})
      this.props.navigation.navigate("App")
    }
    else {
      this.setState({connection: "Not Authenticated"})
      this.props.navigation.navigate("Auth")
    }
  }

  componentDidMount(){
      NetInfo.getConnectionInfo().then((connectionInfo) => {
          console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
      });
      NetInfo.addEventListener('connectionChange', this.handleFirstConnectivityChange);
  }

  componentWillUnmount(){
      NetInfo.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
  }

  handleFirstConnectivityChange = (connection) => {

    switch(connection.type) {
      case 'none':
        this.setState({connection: "There is No Connection😭"})
        break;
      case 'unkown':
        this.setState({connection: "Something is Wrong 😮"})
        break;
      default:
        this.setState({connection: "Connected!😃"})

    }
  }

  render() {
    const { connection } = this.state;
    return(
      <View style={styles.container}>
        <Pulse color='#D80024' numPulses={10} diameter={230} speed={5} duration={2000} image={{style: {height: 120, width: 120, marginLeft: '23.5%', marginTop: '25.5%'}, source: {uri: 'https://focis19.s3-us-west-1.amazonaws.com/6e113411e7c6c475609d41e241d5ed54.png'}}} />
        <Text style={styles.connectionText}>{connection}</Text>
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
  },
  connectionText: {
    fontFamily: 'Avenir',
    color: "#fff",
    marginTop: '150%',
    fontSize: 22
  }
})

export default AuthLoading;
