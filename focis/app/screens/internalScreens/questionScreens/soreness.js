import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker
} from 'react-native';

import { Button } from 'react-native-elements';

import SorenessCard from '../../../components/sorenessCard';

const Soreness = ({navigation}) => {

  const [parts, addPart] = useState([]);

  const addBodyPart = () => {
    addPart([...parts, {id: parts.length, bodyPart: "", soreness: null}])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Button
         title="Add Soreness"
         buttonStyle={styles.addSorenessButton}
         onPress={() => addBodyPart()}
        />
      </View>
      {
        parts.map((part) => {
          <SorenessCard />
        })
      }
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
  inputContainer: {
    flexDirection: 'row'
  }
})

export default Soreness;
