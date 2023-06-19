import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import axios from 'axios';
import {AxiosRequestConfig} from 'axios';
const UploadScreen = () => {
  const [painEndured, setPainEndured] = useState('1');
  const [effectiveness, setEffectiveness] = useState('1');
  const [qualityOfSleep, setSleep] = useState('1');
  const [fileName, setFileName] = useState('File Name');
  const [postForm, setPostForm] = useState();
  const [postFormData, setPostFormData] = useState();

  const pickCSVFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.csv],
      });

      if (
        res.type === 'application/vnd.ms-excel' ||
        res[0].type === 'text/csv'
      ) {
        // Handle the selected CSV file here
        const formData = new FormData();

        formData.append('file', {
          uri: res[0].uri,
          name: res[0].name,
          type: 'text/csv',
          fileData: fileData,
        });

        // Add file to the FormData object
        console.log(res[0].uri);
        setFileName(res[0].name);
        const fileData = await RNFS.readFile(res[0].uri);
        console.log('File data:');
        console.log(fileData);
        // formData.append('file', fileData);
        var form = JSON.stringify({
          UserId: 1,
          Effect: effectiveness,
          Pain: painEndured,
        });
        setPostForm(form);
        setPostFormData(formData);
      } else {
        // Invalid file type selected
        console.log('Invalid file type. Please select a CSV file.');
        console.log(res);
        setFileName(res[0].name);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picking
        console.log('Document picking cancelled.');
      } else {
        // Error occurred while picking the document
        console.log('Error occurred:', err);
      }
    }
  };

  const postFile = () => {
    try {
      if (postForm != null && postFormData != null) {
        axios
          .post(
            'http://145.93.104.250:44301/api/File/postTrainging?' + postForm,
            postFormData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          )
          .then(response => console.log(response.data))
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
            // Handle the error appropriately
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const notifyMessage = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('File Uploaded', ToastAndroid.SHORT);
    } else {
      AlertIOS.alert('File Uploaded');
    }
  };

  const uploadCSVFile = () => {
    //here some axios post request to API
    console.log('csv file uploaded');
    notifyMessage();
    postFile();
  };

  const uploadCSVFileAlerts = () => {
    console.log('function run');
    if (fileName !== 'File Name') {
      Alert.alert('Important', 'Are you sure you want to upload this file?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => uploadCSVFile()},
      ]);
    } else {
      Alert.alert('No file selected');
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: '#191D18'}}>
      <View
        style={{
          width: '100%',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={pickCSVFile}>
        <IconAwesome5 name="folder-plus" size={100} color="#93C123" />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 16,
            color: '#93C123',
          }}>
          {fileName}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '50%',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
            margin: 10,
            marginLeft: 45,
            marginBottom: 40,
            marginTop: -3,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
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

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#F2F2F2',
                marginBottom: 10,
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
          </View>

          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 10,
            }}>
            Effectiveness
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#F2F2F2',
                marginBottom: 10,
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
              style={{width: 300, marginBottom: 10, height: 150}}></Slider>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 10,
            }}>
            Quality Of Sleep
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#F2F2F2',
                marginBottom: 10,
              }}>
              {qualityOfSleep}
            </Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              thumbTintColor="#8E23C1"
              minimumTrackTintColor="#93C123"
              maximumTrackTintColor="#93C123"
              value={1}
              onValueChange={value => setSleep(parseInt(value))}
              style={{width: 300, marginBottom: 10, height: 150}}></Slider>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '10%',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignSelf: 'center',
            margin: 10,
          }}>
          <TouchableOpacity
            onPress={uploadCSVFileAlerts}
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#404040',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#F2F2F2'}}>
              Submit Session
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;
