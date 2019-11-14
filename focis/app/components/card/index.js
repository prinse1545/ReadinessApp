import React from 'react';
import { Slider } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

const Card = ({question, value, onValueChange}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Slider
        value={value}
        onValueChange={value => onValueChange(value)}
        thumbTintColor="#fff"
        style = {styles.slider}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  question: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Avenir",
    fontSize: 28,
  },
  container: {
    paddingTop: '10%',
    alignItems: 'center',
  },
  slider: {
    width: '80%',

  }
})

export default Card;
