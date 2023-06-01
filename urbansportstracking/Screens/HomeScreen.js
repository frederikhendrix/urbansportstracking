import {View, Text} from 'react-native';
import React from 'react';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

import Svg, {Use, Image, SvgUri} from 'react-native-svg';

import SvgImage from '../images/skateboardpana.svg';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          height: '40%',
          marginTop: 20,
        }}>
        <SvgImage />
      </View>
      <View
        style={{
          width: '100%',
          height: '50%',
          marginTop: 30,
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              alignSelf: 'flex-start',
              margin: 10,
              marginLeft: 40,
              marginBottom: 40,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Recent Statistics
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#A6A6A6',
              width: '80%',
              height: '15%',
              marginBottom: 25,
              flexDirection: 'row',
              borderRadius: 9,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16}}>
              Average Impact
            </Text>
            <Text style={{marginRight: 20, fontWeight: 'bold', fontSize: 16}}>
              Measurements
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#A6A6A6',
              width: '80%',
              height: '15%',
              marginBottom: 25,
              flexDirection: 'row',
              borderRadius: 9,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16}}>
              Average Impact
            </Text>
            <Text style={{marginRight: 20, fontWeight: 'bold', fontSize: 16}}>
              Measurements
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#A6A6A6',
              width: '80%',
              height: '15%',
              marginBottom: 25,
              flexDirection: 'row',
              borderRadius: 9,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16}}>
              Average Impact
            </Text>
            <Text style={{marginRight: 20, fontWeight: 'bold', fontSize: 16}}>
              Measurements
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
