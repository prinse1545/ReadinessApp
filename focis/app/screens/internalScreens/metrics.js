import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Metrics extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
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
  text: {
    fontFamily: 'Avenir',
    fontSize: 22,
    color: '#fff'
  }
})

export default Metrics;
