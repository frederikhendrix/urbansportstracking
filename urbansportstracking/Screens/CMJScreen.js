import {View, Text, Button} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CMJScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#191D18',
        justifyContent: 'center',
      }}>
      <TouchableOpacity>
        <Text style={{color: '#FFFFFF'}}>Testing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CMJScreen;
