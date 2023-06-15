import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../../Screens/HomeScreen';
import UploadScreen from '../../Screens/UploadScreen';
import DataScreen from '../../Screens/DataScreen';
import CMJScreen from '../../Screens/CMJScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import DataVisualScreen from '../../Screens/DataVisualScreen';
import LoginScreen from '../../Screens/LoginScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DataStack() {
  return (
    <Stack.Navigator
      initialRouteName="DataStack"
      screenOptions={{headerShown: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Data"
        component={DataScreen}
        options={{
          title: 'Data',
          headerShown: true,
          headerTintColor: '#93C123',
          headerStyle: {
            backgroundColor: '#404040',
          },
        }}
      />
      <Stack.Screen
        name="DataVisualScreen"
        component={DataVisualScreen}
        options={{
          title: 'Data Visual',
          headerShown: true,
          headerTintColor: '#93C123',
          headerStyle: {
            backgroundColor: '#404040',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginStack"
      screenOptions={{headerShown: false, headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerShown: true,
          headerTintColor: '#93C123',
          headerStyle: {
            backgroundColor: '#404040',
          },
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: true,
          headerTintColor: '#93C123',
          headerStyle: {
            backgroundColor: '#404040',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function StackScreens() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#93C123',
        tabBarActiveTintColor: '#191D18',
        tabBarStyle: '#000000',
        headerTitleAlign: 'center',
        tabBarStyle: {backgroundColor: '#404040'},
        headerStyle: {backgroundColor: '#404040'},
        headerTitleStyle: {color: '#93C123'},
      })}>
      <Tab.Screen
        name="Summary"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Summary',
          tabBarIcon: ({color, size}) => (
            <IconAwesome name="info" size={size} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({color, size}) => (
            <IconFeather name="folder-plus" size={size} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={DataStack}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: 'Statistics',
          tabBarIcon: ({color, size}) => (
            <IconAntDesign name="linechart" size={size} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="CMJ"
        component={CMJScreen}
        options={{
          tabBarLabel: 'CMJ',
          tabBarIcon: ({color, size}) => (
            <IconAwesome5 name="running" size={size} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={LoginStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <IconAwesome name="user" size={size} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default StackScreens;
