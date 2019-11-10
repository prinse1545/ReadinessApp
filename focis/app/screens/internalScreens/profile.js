import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035096',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 22,
    color: '#fff'
  }
})

export default Profile;
