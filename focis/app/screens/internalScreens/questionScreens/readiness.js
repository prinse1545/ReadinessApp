import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  Keyboard,
  TouchableOpacity
} from 'react-native';

import { Button, Slider } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { setHoursOfSleep, setSleepQuality, setSleepConsecutive } from '../../../actions/day';
import AwesomeAlert from 'react-native-awesome-alerts';


const Readiness = ({navigation}) => {

  const day = useSelector(state => state.day)
  const dispatch = useDispatch()
  const [alert, toggleAlert] = useState(false)
  const [alertText, setText] = useState(null)

  const finish = () => {
    if(day.hoursOfSleep == null) {
      setText("Please tell us how much you've slept in the last 24 hours")
      toggleAlert(true)
      return
    }

    if(day.sleepQuality == null){
      setText("Please set a sleep quality!")
      toggleAlert(true)
      return
    }

    if(day.consecutiveSleep == null) {
      setText("Please indicate whether the sleep was consecutive or not!")
      toggleAlert(true)
      return
    }

    navigation.goBack()
  }

  return (
    <TouchableOpacity
     style={styles.container}
     onPress={Keyboard.dismiss()}
     activeOpacity={1}
     >
      <View>
        <TextInput
         style={styles.sleepInput}
         placeholder="Hours of Sleep in the last 24 hours"
         placeholderTextColor='#035096'
         keyboardType="number-pad"
         onChangeText={(text) => dispatch(setHoursOfSleep(text))}
        />
      </View>
      <View style={styles.quality}>
        <Text style={styles.qualityText}>
          Rate the quality of your sleep 1 being restless and 5 being restful
        </Text>
        <View style={styles.sliderContainer}>
          <Slider
           maximumValue={5}
           minimumValue={1}
           step={1}
           value={day.sleepQuality}
           onValueChange={(value) => dispatch(setSleepQuality(value))}
           thumbTintColor='#035096'
           style={styles.slider}
          />
          <Text style={styles.sliderValue}>{day.sleepQuality}</Text>
        </View>
      </View>
      <View style={styles.consecutiveContainer}>
        <Text style={styles.consecutiveText}>Were the hours consecutive?</Text>
        <Switch
         value={day.consecutiveSleep}
         onValueChange={(value) => dispatch(setSleepConsecutive(value))}
        />
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
        message={alertText}
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
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quality: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sleepInput: {
    height: 40,
    width: 300,
    borderRadius: 10,
    borderWidth: 2,
    paddingLeft: 5,
    borderColor: '#035096'
  },
  qualityText: {
    width: 300,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#035096',
    fontSize: 16
  },
  slider: {
    width: 200,
    marginTop: 0
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
  consecutiveContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  consecutiveText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#035096',
    marginRight: 5
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

export default Readiness;
