import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, Slider } from 'react-native-elements';


const MentalStress = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Rate your mental stress level, 1 being very stressed and 5 being calm and composed
      </Text>
      <Slider
       maximumValue={5}
       minimumValue={1}
       step={1}
       thumbTintColor='#035096'
       style={styles.slider}
      />
      <Button
       title="Finish"
       containerStyle={styles.buttonContainer}
       buttonStyle={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 16,
    textAlign: 'center',
    width: '70%',
    color: '#035096'
  },
  slider: {
    width: 250,
    marginTop: -25,
    marginTop: 20
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: 200
  },
  button: {
    borderRadius: 10
  }
})

export default MentalStress;
