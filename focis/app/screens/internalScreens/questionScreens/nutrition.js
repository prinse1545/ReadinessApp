import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Button, Slider } from 'react-native-elements';

const Nutrition = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Nutrition</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Nutrition;
