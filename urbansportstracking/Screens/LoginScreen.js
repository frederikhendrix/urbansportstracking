import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import blacksplashImage from '../images/blacksplash.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const person = {
    email: 'johndoe@gmail.com',
    password: 'hello',
    phoneNumber: '06311111',
    weight: '90',
  };

  useEffect(() => {
    const _storeData = async () => {
      try {
        await AsyncStorage.setItem('@MyApp:dataEmail', person.email);
        await AsyncStorage.setItem('@MyApp:dataPassword', person.password);
        await AsyncStorage.setItem(
          '@MyApp:dataPhoneNumber',
          person.phoneNumber,
        );
        await AsyncStorage.setItem('@MyApp:dataWeight', person.weight);
      } catch (error) {
        console.log(error + ' This is the error');
      }
    };
    _storeData();
  }, []);

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const loginButton = () => {
    if (email === person.email && password === person.password) {
      navigation.navigate('ProfileScreen');
    }

    console.log(email);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#191D18'}}>
      <Image
        style={{width: '100%', height: '50%'}}
        source={require('../images/Login_Image.png')}
      />
      <Text
        style={{
          color: '#93C123',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 40,
          marginBottom: 10,
          marginTop: 0
        }}>
        Email
      </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="johndoe@gmail.com"
          placeholderTextColor="#A8A8A8"
          value={email}
          onChangeText={text => handleEmailChange(text)}
        />
      </View>
      <Text
        style={{
          color: '#93C123',
          fontSize: 20,
          fontWeight: 700,
          marginLeft: 40,
          marginTop: 15,
          marginBottom: 10,
        }}>
        Password
      </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="**"
          placeholderTextColor="#A8A8A8"
          secureTextEntry={true}
          value={password}
          onChangeText={text => handlePasswordChange(text)}
        />
      </View>

      <TouchableOpacity
        onPress={loginButton}
        style={{
          width: '60%',
          alignSelf: 'center',
          backgroundColor: '#93C123',
          padding: 10,
          borderRadius: 10,
          marginBottom: -5,
          margin: 50,
        }}>
        <Text
          style={{
            color: '#F2F2F2',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Log in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: '60%',
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
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Sign up
        </Text>
      </TouchableOpacity>
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
    borderRadius: 5,
    paddingLeft: 10,
    color: '#F2F2F2', // Text color when typing
    backgroundColor: '#404040'
  },
});
export default LoginScreen;
