import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const SorenessCard = ({bodyPart, soreness}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Body Part: {bodyPart}</Text>
      <Text style={styles.text}>Soreness Level: {soreness}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    height: 70,
    backgroundColor: '#035096'
  },
  text: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontSize: 18
  }
})

export default SorenessCard;
