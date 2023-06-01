import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../../Screens/HomeScreen';
import UploadScreen from '../../Screens/UploadScreen';
import DataScreen from '../../Screens/DataScreen';
import CMJScreen from '../../Screens/CMJScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import DataVisualScreen from '../../Screens/DataVisualScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreens() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#000000',
        tabBarActiveTintColor: '#FF0000',
        tabBarStyle: '#000000',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <IconAwesome name="home" size={size} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Data" component={DataScreen} />
      <Tab.Screen name="CMJ" component={CMJScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default StackScreens;
