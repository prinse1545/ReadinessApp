import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, Slider } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { setMentalStress } from '../../../actions/day';
import AwesomeAlert from 'react-native-awesome-alerts';

const MentalStress = ({navigation}) => {

  const stress = useSelector(state => state.day.mentalStressLevel)
  const dispatch = useDispatch()
  const [alert, toggleAlert] = useState(false)

  const finish = () => {

    if(stress == null) {
      toggleAlert(true)
      return
    }

    navigation.goBack()
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Rate your mental stress level, 1 being very stressed and 5 being calm and composed
      </Text>
      <View style={styles.sliderContainer}>
        <Slider
         maximumValue={5}
         minimumValue={1}
         value={stress}
         onValueChange={(value) => dispatch(setMentalStress(value))}
         step={1}
         thumbTintColor='#035096'
         style={styles.slider}
        />
        <Text style={styles.sliderValue}>{stress}</Text>
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
        message="Please enter a mental stress level!"
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
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: 200
  },
  button: {
    borderRadius: 10
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
  }
})

export default MentalStress;
