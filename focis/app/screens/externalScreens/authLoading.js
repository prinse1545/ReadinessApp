import React, { useState, useEffect } from 'react';
import { useQuery } from 'urql'
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import Pulse from 'react-native-pulse';
import NetInfo from "@react-native-community/netinfo";
import { useSelector, useDispatch } from 'react-redux';
import { setUserId } from '../../actions/user';


const AuthLoading = ({navigation}) => {

  const [connection, setConnection] = useState(null);
  const dispatch = useDispatch();
  const [result] = useQuery({
    query: `{ getPlayerId }`
  })


  useEffect(() => {

    if(result.fetching) {
      setConnection("Verifying")
    }
    else if(result.error) {

      setConnection("Not Authenticated")
      navigation.navigate("Auth")
    }
    else if(result.data){
      setConnection("⚡Logging In⚡")
      dispatch(setUserId(result.data.getPlayerId))
      navigation.navigate("App")
    }

  })


  return (
    <View style={styles.container}>
      <Pulse color='#D80024' numPulses={10} diameter={230} speed={5} duration={2000} image={{style: {height: 120, width: 120, marginLeft: '23.5%', marginTop: '25.5%'}, source: {uri: 'https://focis19.s3-us-west-1.amazonaws.com/6e113411e7c6c475609d41e241d5ed54.png'}}} />
      <Text style={styles.connectionText}>{connection}</Text>
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
  connectionText: {
    fontFamily: 'Avenir',
    color: "#fff",
    marginTop: '150%',
    fontSize: 22
  }
})


export default AuthLoading;
