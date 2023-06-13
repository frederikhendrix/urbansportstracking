import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const DataScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [weight, setWeight] = useState('');
  const data = [
    'trainingsession1',
    'trainingsession2',
    'trainingsession3',
    'trainingsession4',
    'trainingsession5',
    'trainingsession6',
    'trainingsession7',
    'trainingsession8',
    'trainingsession9',
    'trainingsession10',
    'trainingsession11',
    'trainingsession22',
    'trainingsession33',
    'trainingsession44',
    'trainingsession55',
  ];
  const [trainingSessions, setTrainingSessions] = useState([]);

  useEffect(() => {
    axios
      .get('http://145.93.104.170:44301/api/trainingsession/all')
      .then(response => {
        console.log(response);
        setTrainingSessions(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  const [person, setPerson] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    weight: '',
  });

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MyApp:dataWeight');
      if (value !== null) {
        // We have data!!
        console.log(value);
        setWeight(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#191D18',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: '90%',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#F2F2F2',
            marginBottom: 20,
          }}>
          All Files
        </Text>

        <ScrollView>
          {/* Map through the data array and create buttons */}
          {trainingSessions.map((item, index) => (
            <View
              key={index}
              style={{
                margin: 10,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: '#F2F2F2',
                    fontSize: 16,
                    marginBottom: 15,
                  }}>
                  {item.id}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#404040',
                    borderRadius: 5,
                    padding: 10,
                    paddingRight: 100,
                  }}>
                  <Text style={{color: '#F2F2F2'}}>{item.startingTime}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DataVisualScreen', {
                      name: item.id,
                      date: item.startingTime,
                    })
                  }>
                  <IconAnt name="doubleright" size={24} color="#93C123" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DataScreen;
