import React, { useState, useEffect } from 'react';
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
import { LineChart } from "react-native-chart-kit";

const getUser = `
query($id: String!){
  user(id: $id) {
    name
    email
  }
}
`

const Profile = ({navigation}) => {

  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const[result] = useQuery({
    query: getUser,
    variables: {id: "ck2ru5gwt001e0701a4ekuf49"}
  });

  useEffect(() => {

    if(result.data) {
      const { name, email } = result.data.user;
      setName(name)
      setEmail(email)
    }


  })

  const logout = () => {


    AsyncStorage.removeItem('focis-auth-token').then((res) => {
      navigation.navigate("Auth")
    })
  }

  onLogout = () => {
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
        <TouchableOpacity>
          <Image source={{uri: ""}} style={styles.profileImage} />
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
          null
        }
      </View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel={"$"}
        yAxisSuffix={"k"}
        chartConfig={{
          backgroundColor: '#035096',
          backgroundGradientFrom: '#1E90FF',
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
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
    height: '20%',
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
