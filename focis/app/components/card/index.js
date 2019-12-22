import React from 'react';
import { Slider } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import { Icon } from 'react-native-elements';

const Card = ({text, onPress, disabled}) => {

  if(disabled) {
    return (
      <TouchableOpacity style={styles.disabledContainer} onPress={onPress} disabled={disabled}>
        <Text style={styles.question}>{text}</Text>
        <Icon
          name="keyboard-arrow-right"
          size={36}
          color='#035096'
        />
      </TouchableOpacity>
    )
  }
  else {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
        <Text style={styles.question}>{text}</Text>
        <Icon
          name="keyboard-arrow-right"
          size={36}
          color='#035096'
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    color: '#035096',
    fontFamily: "Avenir",
    fontSize: 24
  },
  container: {
    backgroundColor: '#fff',
    height: 70,
    width: 350,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabledContainer: {
    backgroundColor: '#fff',
    height: 80,
    width: 350,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5
  }
})

export default Card;
