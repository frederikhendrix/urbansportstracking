import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Platform,
  AlertIOS,
  formData,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconFeather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import axios from 'axios';
const UploadScreen = () => {
  const [painEndured, setPainEndured] = useState('1');
  const [effectiveness, setEffectiveness] = useState('1');
  const [fileName, setFileName] = useState('File Name');

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

        // Add file to the FormData object
        console.log(res[0].uri);
        setFileName(res[0].name);
        const fileData = await RNFS.readFile(res[0].uri);
        console.log('File data:');
        console.log(fileData);
        formData.append('file', fileData);
        var form = JSON.stringify({
          UserId: 1,
          Effect: null,
          Pain: null,
          file: fileData,
        });
        axios
          .post(
            'http://145.93.108.31:44301/api/File/postTrainging?' +
              JSON.stringify({
                UserId: 1,
                Effect: null,
                Pain: null,
              }),
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          )
          .catch(error => {
            console.log(error.data);
          });
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
          marginTop: 40,
        }}>
        <TouchableOpacity onPress={pickCSVFile}>
          <IconFeather name="folder-plus" size={144} color="#93C123" />
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
          height: '35%',
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
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 5,
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
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 10,
            }}>
            Effectiveness
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#F2F2F2',
              marginBottom: 5,
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
            style={{width: 300, marginBottom: 10}}></Slider>
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
          <TouchableOpacity
            onPress={uploadCSVFileAlerts}
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#404040',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#F2F2F2'}}>
              Upload
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;
