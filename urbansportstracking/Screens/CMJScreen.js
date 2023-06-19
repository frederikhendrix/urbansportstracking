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
          'http://145.93.104.250:44301/api/countermovementjump/all',
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
  const chartTheme = {
    axis: {
      style: {
        axis: {
          stroke: 'white',
        },
        grid: {
          stroke: 'white', //CHANGE COLOR OF X-AXIS GRID LINES
          strokeDasharray: '3',
        },
        tickLabels: {
          // this changed the color of my numbers to white
          fill: 'white',
        },
      },
    },
  };
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
          <View>
            <ScrollView horizontal>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={50}
                width={900}
                padding={{left: 50, bottom: 40}}>
                <VictoryAxis
                  style={{
                    tickLabels: {
                      fill: '#FFFFFF',
                      fontSize: 0,
                    },
                    axisLabel: {
                      fill: '#FFFFFF',
                      fontSize: 20,
                    },
                  }}
                />
                <VictoryAxis
                  style={{
                    tickLabels: {
                      fill: '#FFFFFF',
                      fontSize: 16,
                    },
                    axisLabel: {
                      fill: '#FFFFFF',
                      fontSize: 10,
                    },
                  }}
                  label="Acceleration in m"
                  dependentAxis
                />
                <VictoryLine
                  style={{
                    data: {stroke: '#93C123'},
                    parent: {border: '1px solid #ccc'},
                  }}
                  data={data}
                  cornerRadius={{topLeft: 5, topRight: 5}}
                  barWidth={2}
                  padding={{left: 15, right: 15}}
                  width={data.length}
                />
              </VictoryChart>
            </ScrollView>
            <Text
              style={{
                color: '#93C123',
                marginLeft: 75,
                marginTop: 10,
                fontSize: 23,
                fontWeight: 500,
              }}>
              {' '}
              Statistics - Fatigueness
            </Text>
            <View
              style={{
                display: 'flex',
                marginTop: 20,
                gap: 5,
                alignSelf: 'center',
              }}>
              <Text style={{color: '#FFFFFF', fontSize: 15}}>
                Total Distance covered = {totalDistance.toFixed(2)} m
              </Text>
              <Text style={{color: '#FFFFFF', fontSize: 15}}>
                Maximum acceleration = {maxPositiveVelocity.toFixed(2)} m/s^2
              </Text>
              <Text style={{color: '#FFFFFF', fontSize: 15}}>
                Maximum deceleration = {minPositiveVelocity.toFixed(2)} m/s^2
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default CMJScreen;
