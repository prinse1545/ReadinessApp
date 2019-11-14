import React from 'react';
import { Slider } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import { Icon } from 'react-native-elements';

const Card = ({question, value, onValueChange}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.sliderContainer}>
        <Slider
          value={value}
          onValueChange={value => onValueChange(value)}
          thumbTintColor="#fff"
          style = {styles.slider}
        />
        <TouchableOpacity>
          <Icon
           name="cloud-upload"
           size={20}
           reverse={true}
           color="#1E90FF"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  question: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Avenir",
    fontSize: 24,
    marginBottom: '10%'
  },
  container: {
    paddingTop: '30%',
    alignItems: 'center',
  },
  slider: {
    width: '75%',

  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: -50
  }
})

export default Card;
