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

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#191D18'}}>
      <Image
        style={{
          width: '33%',
          height: '20%',
          alignSelf: 'center',
          marginTop: '10%',
        }}
        source={require('../images/ProfileImage.png')}
      />
      <Text
        style={{
          color: '#F2F2F2',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 40,
          marginBottom: 10,
          marginTop: '10%',
        }}>
        Profile information
      </Text>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: '70%',
          marginTop: 10,
          marginLeft: '10%',
          backgroundColor: '#404040',
          padding: 10,
          borderWidth: 0,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#F2F2F2',
            fontSize: 18,
            marginBottom: '2%',
            marginTop: '2%',
            marginLeft: '2%',
          }}>
          John Doe
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
          <Text style={{
            marginLeft: "85%",
            color: '#93C123',
            fontSize: 18,
            marginTop: "-10%",
          }}>
          Edit
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: '70%',
          marginLeft: '10%',
          backgroundColor: '#404040',
          padding: 10,
          borderWidth: 0,
          borderRadius: 10,
          marginTop: '2%',
        }}>
        <Text
          style={{
            color: '#F2F2F2',
            fontSize: 18,
            marginBottom: '2%',
            marginTop: '2%',
            marginLeft: '2%',
          }}>
          JohnDoe@gmail.com
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
          <Text style={{
            marginLeft: "85%",
            color: '#93C123',
            fontSize: 18,
            marginTop: "-10%",
          }}>
          Edit
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: '70%',
          marginLeft: '10%',
          backgroundColor: '#404040',
          padding: 10,
          borderWidth: 0,
          borderRadius: 10,
          marginTop: '2%',
        }}>
        <Text
          style={{
            color: '#F2F2F2',
            fontSize: 18,
            marginBottom: '2%',
            marginTop: '2%',
            marginLeft: '2%',
          }}>
          +31 6 11111111
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
          <Text style={{
            marginLeft: "85%",
            color: '#93C123',
            fontSize: 18,
            marginTop: "-10%",
          }}>
          Edit
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: '#404040',
          padding: 5,
          borderWidth: 0,
          borderRadius: 10,
          marginTop: '18%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#F2F2F2',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            marginTop: '2%',
            paddingLeft: '3%',
            paddingRight: '3%',
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: '#404040',
          padding: 5,
          borderWidth: 0,
          borderRadius: 10,
          marginTop: '4%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#93C123',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '2%',
            marginTop: '2%',
            paddingLeft: '3%',
            paddingRight: '3%',
          }}>
          Delete Account
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
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    paddingLeft: 10,
    color: '#F2F2F2', // Text color when typing
  },
});
export default ProfileScreen;
