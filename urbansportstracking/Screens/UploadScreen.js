import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconFeather from 'react-native-vector-icons/Feather';

const UploadScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity>
          <IconFeather name="folder-plus" size={144} color="#000000" />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 16,
            color: 'black',
          }}>
          File Name
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '30%',
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
              color: '#000000',
              marginBottom: 20,
            }}>
            Remarks
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#000000',
              marginBottom: 20,
            }}>
            Pain Endured
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#000000',
              marginBottom: 20,
            }}>
            Effectiveness
          </Text>
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
          <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000000'}}>
            Upload
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;
