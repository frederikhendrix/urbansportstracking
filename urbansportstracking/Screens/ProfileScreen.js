import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import blacksplashImage from '../images/blacksplash.png';
const ProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#191D18'}}>
      <KeyboardAvoidingView
        style={{flex: 1, justifyContent: 'center'}}
        behavior="padding"
        keyboardVerticalOffset={Platform.select({ios: 0, android: 25})}>
        <Image
          style={{height: 320}}
          source={require('../images/Login_Image.png')}
        />
        <Text
          style={{
            color: '#93C123',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 40,
            marginBottom: 10,
          }}>
          Email
        </Text>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#A8A8A8"></TextInput>
        </View>
        <Text
          style={{
            color: '#93C123',
            fontSize: 16,
            fontWeight: 700,
            marginLeft: 40,
            marginTop: 30,
            marginBottom: 10,
          }}>
          Password
        </Text>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#A8A8A8"
            secureTextEntry={true}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: '50%',
            alignSelf: 'center',
            backgroundColor: '#93C123',
            padding: 10,
            borderRadius: 10,
            marginBottom: 0,
            margin: 20,
          }}>
          <Text
            style={{
              color: '#F2F2F2',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: '50%',
            alignSelf: 'center',
            backgroundColor: '#191D18',
            borderColor: '#93C123',
            padding: 10,
            borderWidth: 2,
            borderRadius: 10,
            marginBottom: 20,
            margin: 20,
          }}>
          <Text
            style={{
              color: '#F2F2F2',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    paddingLeft: 10,
    color: '#F2F2F2', // Text color when typing
  },
});
export default ProfileScreen;
