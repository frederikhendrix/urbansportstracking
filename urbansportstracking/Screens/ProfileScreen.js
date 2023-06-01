import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#191D18'}}>
      <Text>ProfileScreen</Text>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#93C123',
          borderBottomWidth: 1,
          marginBottom: 10,
          backgroundColor: '#404040',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            marginRight: 5,
            marginBottom: 0,
            marginLeft: 5,
            color: '#93C123',
          }}>
          Icon
        </Text>
        <TextInput
          style={{paddingVertical: 2, flex: 1}}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#F2F2F2"></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#93C123',
          borderBottomWidth: 1,
          marginBottom: 25,
          backgroundColor: '#404040',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            marginRight: 5,
            marginBottom: 0,
            marginLeft: 5,
            color: '#93C123',
          }}>
          Icon
        </Text>
        <TextInput
          style={{paddingVertical: 2, flex: 1, color: '#F2F2F2'}}
          placeholder="Password"
          placeholderTextColor="#F2F2F2"
          secureTextEntry={true}></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: '#93C123',
          padding: 20,
          borderRadius: 10,
          marginBottom: 30,
          margin: 50,
        }}>
        <Text
          style={{
            color: '#191D18',
            fontWeight: '700',
            fontSize: 16,
            textAlign: 'center',
          }}>
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
