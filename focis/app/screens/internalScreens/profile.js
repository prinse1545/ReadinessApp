import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Icon } from 'react-native-elements';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={{uri: ""}} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.name}>First Name Last Name </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035096',
    paddingTop: '13%'
  },
  name: {
    fontFamily: 'Avenir',
    fontSize: 22,
    color: '#fff',
    marginLeft: 5
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    paddingRight: 10
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: "#fff",
    paddingBottom: '4%',
    borderBottomWidth: 2
  }
})

export default Profile;
