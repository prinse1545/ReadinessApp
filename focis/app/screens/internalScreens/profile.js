import React, { useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import { useQuery, query } from 'urql'
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card/';


const getUser = `
query($id: String!){
  user(id: $id) {
    name
    email
  }
}
`


const Profile = ({navigation}) => {


  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [image, setImage] = useState(null);
  const [value, setValue] = useState(null);
  const userId = useSelector(state => state.user.id);


  const [result] = useQuery({
    query: getUser,
    variables: {id: userId}
  });

  useEffect(() => {


    if(result.data) {
      const { name, email } = result.data.user;
      setName(name)
      setEmail(email)
    }


  })

  const sliderChange = value => {
    setValue(value)
  }

  const logout = () => {


    AsyncStorage.removeItem('focis-auth-token').then((res) => {
      navigation.navigate("Auth")
    })
  }

  const onLogout = () => {
    Alert.alert(
      'Logout',
      'Do you wish to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => logout()},
      ],
      {cancelable: false},
    );
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButtonContainer} onPress={() => onLogout()}>
        <Icon
          name='gear'
          type='font-awesome'
          color="#fff"
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.questionsContainer}>
        <Card
          text="Rest & Readiness"
          disabled={false}
        />
        <Card
          text="Fatigue"
          disabled={false}
        />
        <Card
          text="Soreness"
          disabled={false}
        />
        <Card
          text="Mental Stress"
          disabled={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035096',
    paddingTop: '13%',
    alignItems: 'center',
    paddingTop: 100
  },
  name: {
    fontFamily: 'Avenir',
    fontSize: 22,
    color: '#fff',
    marginLeft: 5
  },
  email: {
    fontFamily: 'Avenir',
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
    opacity: 0.5
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
    borderBottomColor: "#fff",
    paddingBottom: '4%',
    borderBottomWidth: 2,
    width: '100%',
    paddingLeft: '5%'
  },
  questionsContainer: {
    height: '40%',
    width: '100%',
  },
  noQuestionText: {
    fontFamily: "Avenir",
    fontSize: 22,
    color: "#fff"
  },
  settingsButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 40
  },


})



export default Profile;
