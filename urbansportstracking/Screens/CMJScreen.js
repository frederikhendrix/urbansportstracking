import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  VictoryChart,
  VictoryBar,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
} from 'victory-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CMJScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalDistance, setTotalDistance] = useState(0);
  const [maxPositiveVelocity, setMaxPositiveVelocity] = useState(0);

  const [minPositiveVelocity, setMinPositiveVelocity] = useState(0);
  useEffect(() => {
    if (data.length !== 0) {
      CalculateDistance();
    }
  }, [data]);
  const CalculateDistance = () => {
    const timestamp = 1 / 60;
    var TotalDistance = 0;
    var maxPositiveValue = 0;
    var minPositiveValue = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      var distance = 0;
      if (element.y < minPositiveValue) {
        minPositiveValue = element.y;
      }
      if (element.y > maxPositiveValue) {
        maxPositiveValue = element.y;
      }
      if (element.y < 0) {
        distance = 0.5 * -element.y * (timestamp * timestamp);
      } else {
        distance = 0.5 * element.y * (timestamp * timestamp);
      }
      TotalDistance = TotalDistance + distance;
    }
    setMaxPositiveVelocity(maxPositiveValue);
    setMinPositiveVelocity(minPositiveValue);
    setTotalDistance(TotalDistance);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://172.17.144.1:44301/api/countermovementjump/all',
        );
        const timestamp = 1 / 60;
        setData(
          response.data.map(obj => {
            return {
              x: obj.id * timestamp,
              y: obj.acc_Z,
            };
          }),
        );
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <View
      style={{flex: 1, backgroundColor: '#191D18', flexDirection: 'column'}}>
      <Text
        style={{
          fontSize: 16, 
          color: '#F2F2F2',
          fontWeight: 600,
          fontSize: 20,
          marginBottom: 10,
          marginTop: 10,
          marginLeft: 35,
        }}></Text>
      {isLoading ? (
        <View
          style={{
            backgroundColor: '#191D18',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      ) : (
        <View style={{marginTop: 20}}>
          <ScrollView horizontal>
            <View>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={50}
                width={900}
                padding={{left: 50, bottom: 40}}>
                <VictoryLine
                  style={{
                    data: {stroke: '#c43a31'},
                    parent: {border: '1px solid #ccc'},
                  }}
                  data={data}
                  cornerRadius={{topLeft: 5, topRight: 5}}
                  barWidth={2}
                  padding={{left: 15, right: 15}}
                  width={data.length}
                />
              </VictoryChart>
                
                <Text style={{color: '#FFFFFF'}}> Test</Text>
                  <View style={{display:"flex", marginLeft:110}}>
              <Text style={{color: '#FFFFFF'}}>
                Total Distance covered = {totalDistance}
              </Text>
              <Text style={{color: '#FFFFFF'}}>
                Maximum acceleration = {maxPositiveVelocity}
              </Text>
              <Text style={{color: '#FFFFFF'}}>
                Maximum deceleration = {minPositiveVelocity}
              </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CMJScreen;
