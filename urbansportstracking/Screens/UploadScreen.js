import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconFeather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
const UploadScreen = () => {
  const [painEndured, setPainEndured] = useState('1');
  const [effectiveness, setEffectiveness] = useState('1');
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: '#191D18'}}>
      <View
        style={{
          width: '100%',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity>
          <IconFeather name="folder-plus" size={144} color="#93C123" />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 16,
            color: '#93C123',
          }}>
          File Name
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '35%',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
            margin: 10,
            marginLeft: 40,
            marginBottom: 40,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 20,
            }}>
            Remarks
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 10,
            }}>
            Pain Endured
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 5,
            }}>
            {painEndured}
          </Text>
          <Slider
            minimumValue={1}
            maximumValue={10}
            thumbTintColor="#8E23C1"
            minimumTrackTintColor="#93C123"
            maximumTrackTintColor="#93C123"
            value={1}
            onValueChange={value => setPainEndured(parseInt(value))}
            style={{width: 300, marginBottom: 10}}></Slider>
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 10,
            }}>
            Effectiveness
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 5,
            }}>
            {effectiveness}
          </Text>
          <Slider
            minimumValue={1}
            maximumValue={10}
            thumbTintColor="#8E23C1"
            minimumTrackTintColor="#93C123"
            maximumTrackTintColor="#93C123"
            value={1}
            onValueChange={value => setEffectiveness(parseInt(value))}
            style={{width: 300, marginBottom: 10}}></Slider>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '20%',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignSelf: 'center',
            margin: 10,
            marginTop: 30,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#404040',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#F2F2F2'}}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;
