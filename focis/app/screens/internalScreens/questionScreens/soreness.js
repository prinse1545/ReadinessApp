import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Slider } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import SorenessCard from '../../../components/sorenessCard';
import { setSoreness } from '../../../actions/day';

const Soreness = ({navigation}) => {

  const sorenessList = useSelector(state => state.day.soreness)
  const dispatch = useDispatch()
  const [bodyPart, setPart] = useState(null)
  const [soreness, setSorenessLevel] = useState(null)
  const [alert, toggleAlert] = useState(false)

  const addBodyPart = () => {
    if(bodyPart == null || soreness == null) {
      toggleAlert(true)
      return
    }

    setSorenessLevel(null)
    setPart(null)
    dispatch(setSoreness([...sorenessList, {bodyPart: bodyPart, sorenessLevel: soreness}]))
  }

  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.instruction}>
          Select your the body part, level of soreness, and click add soreness
          to report your soreness level.
        </Text>
        <Picker
          selectedValue={bodyPart}
          style={{height: 50, width: 150, top: 30, position: 'absolute'}}
          itemStyle={{color: '#fff'}}
          onValueChange={(itemValue, itemIndex) =>
            setPart(itemValue)
          }>
          <Picker.Item label="Feet" value="Feet" />
          <Picker.Item label="Calves" value="Calves" />
          <Picker.Item label="Hamstring" value="Hamstring" />
          <Picker.Item label="Quadracepts" value="Quadracepts" />
          <Picker.Item label="Abdomen" value="Abdomen" />
          <Picker.Item label="Pectorals" value="Pectorals" />
          <Picker.Item label="Lats" value="Lats" />
          <Picker.Item label="Traps" value="Traps" />
          <Picker.Item label="Lower Back" value="Lower Back" />
        </Picker>
        <View style={styles.sliderContainer}>
          <Slider
           maximumValue={5}
           minimumValue={1}
           value={soreness}
           onValueChange={(value) => setSorenessLevel(value)}
           step={1}
           thumbTintColor='#fff'
           style={styles.slider}
          />
          <Text style={styles.sliderValue}>{soreness}</Text>
        </View>
        <Button
         title="Add Soreness"
         buttonStyle={styles.addButton}
         onPress={() => addBodyPart()}
        />
      </View>
      <FlatList
        data={sorenessList}
        renderItem={({item}) => <SorenessCard bodyPart={item.bodyPart} soreness={item.sorenessLevel} /> }
        ListFooterComponent={<Button title="Finish" onPress={() => navigation.goBack()} />}
      />
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Invalid Input"
        message="Please fill out fields before adding soreness!"
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
  addSorenessButton: {
    borderRadius: 10
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%'
  },
  sliderValue: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#fff',
    marginLeft: 5
  },
  slider: {
    width: 250,
  },
  instruction: {
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#fff',
    width: '80%',
    textAlign: 'center',
    marginTop: 40
  },
  topContainer: {
    alignItems: 'center',
    backgroundColor: '#035096',
    paddingBottom: 50
  },
  addButton: {
    borderRadius: 10,
    marginTop: 20
  }
})

export default Soreness;
