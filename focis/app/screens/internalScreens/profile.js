import React, { useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';
import { useQuery, query } from 'urql'
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import Card from '../../components/card/';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const getUser = `
query($id: String!){
  user(id: $id) {
    name
    email
  }
}
`

const cards = [
  {text: "Describe your level of soreness today"},
  {text: "How well did you sleep last night?"},
  {text: "How well did you eat today?"},
  {text: "How well did you feel during your workout?"},
  {text: "How hydrated were you through the day?"}
]

const Profile = ({navigation}) => {

  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [image, setImage] = useState(null);
  const [value, setValue] = useState(null);

  const [result] = useQuery({
    query: getUser,
    variables: {id: "ck2ru5gwt001e0701a4ekuf49"}
  });

  useEffect(() => {


    if(result.data) {
      const { name, email } = result.data.user;
      setName(name)
      setEmail(email)
    }

    setQuestions(cards)


  })


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

  const pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: response.data };
        console.log(source)

        // setImage(source)
      }
    });
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
        <TouchableOpacity onPress={() => pickImage()}>
          <Image source={image} style={styles.profileImage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <View style={styles.questionsContainer}>
        {
          questions.length == 0 ?
          <Text style={styles.noQuestionText}> No Questions at this Time</Text>
          :
          <Swiper showsButtons={false}>
            {
              questions.map((card) => {
                return (
                  <Card question={card.text} />
                )
              })
            }
          </Swiper>
        }
      </View>
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
    alignItems: 'center',
    justifyContent: 'center'
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
