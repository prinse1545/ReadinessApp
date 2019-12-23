import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, Slider } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { setFatigueLevel } from '../../../actions/day';
import AwesomeAlert from 'react-native-awesome-alerts';

const Fatigue = ({navigation}) => {

  const [alert, toggleAlert] = useState(false)
  const fatigue = useSelector(state => state.day.fatigueLevel)
  const dispatch = useDispatch()

  const finish = () => {

    if(fatigue == null) {
      toggleAlert(true)
      return
    }

    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Rate your fatigue level, 1 being tired and 5 being energized
      </Text>
      <View style={styles.sliderContainer}>
        <Slider
         maximumValue={5}
         minimumValue={1}
         value={fatigue}
         onValueChange={(value) => dispatch(setFatigueLevel(value))}
         step={1}
         thumbTintColor='#035096'
         style={styles.slider}
        />
        <Text style={styles.sliderValue}>{fatigue}</Text>
      </View>
      <Button
       title="Finish"
       containerStyle={styles.buttonContainer}
       buttonStyle={styles.button}
       onPress={() => finish()}
      />
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Invalid Input"
        message={"Please enter a fatigue level!"}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#f00"
        onConfirmPressed={() => {
          toggleAlert(false)
        }}
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
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sliderValue: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#035096',
    marginLeft: 5
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

export default Fatigue;
