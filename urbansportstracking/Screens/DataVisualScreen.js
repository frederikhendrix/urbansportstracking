import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GiftedCharts from '../components/GiftedCharts';
import {ScrollView, ActivityIndicator} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {
  VictoryChart,
  VictoryBar,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';
import {Data} from 'victory';
const DataVisualScreen = ({route}) => {
  const routeDate = route.params.date;
  const routeName = route.params.name;
  console.log(route.params);
  const [data, setData] = useState();
  const [playerLoadData, setPlayerLoadData] = useState();
  const [trainingSession, setTrainingSession] = useState([]);
  const [playerLoad, setPlayerLoad] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingForPlayerLoad, setIsLoadingForPlayerLoad] = useState(true);
  const [weight, setWeight] = useState('120');
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MyApp:dataWeight');
      if (value !== null) {
        // We have data!!
        console.log(value);
        setWeight(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(
            'http://145.93.104.170:44301/api/trainingsession/' +
              route.params.name,
          )
          .catch(error => {
            console.log(error + 'Training');
          });
        console.log('UseEffect for training data');
        console.log(response.data);
        setData(
          response.data.impacts.map(obj => {
            const percentageOfBodyweight =
              (obj.impactForce / parseInt(weight, 10)) * 100;
            return {
              x: obj.frame,
              y: percentageOfBodyweight,
            };
          }),
        );
        setIsLoading(false);
      } catch (error) {
        console.log(error.response + 'Training2');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(
            'http://145.93.104.170:44301/api/accelerationwithplayerload/all/' +
              route.params.name,
          )
          .catch(error => {
            console.log(error + 'Playerload');
          });
        setPlayerLoadData(
          response.data.map(obj => {
            return {
              x: obj.id,
              y: obj.playerLoad,
            };
          }),
        );
        console.log('UseEffect for player load');
        // console.log(response.data);
        // GetPlayerLoadData();
        setIsLoadingForPlayerLoad(false);
      } catch (error) {
        console.log(error.response + 'PlayerLoad');
      }
    };

    fetchData();
  }, [isLoading]);

  return (
    <View
      style={{flex: 1, backgroundColor: '#191D18', flexDirection: 'column'}}>
      <ScrollView vertical>
        <View
          style={{
            flex: 1,
            backgroundColor: '#191D18',
            flexDirection: 'column',
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 25}}>impact Force</Text>
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
                    padding={{left: 50, bottom: 40}}
                    // containerComponent={
                    //   <VictoryZoomContainer
                    //     allowZoom={false}
                    //     allowPan={true}
                    //     zoomDimension="x"
                    //     zoomDomain={{x: [newData[0], newData[10]]}}
                    //     clipContainerComponent={<VictoryClipContainer />}
                    //   />
                    // }
                  >
                    <VictoryBar
                      style={{data: {fill: '#c43a31'}}}
                      data={data}
                      cornerRadius={{topLeft: 5, topRight: 5}}
                      barWidth={2}
                      padding={{left: 15, right: 15}}
                      width={data.length}
                      //domain={{x: [newData[0], newData[10]]}}
                    />
                  </VictoryChart>
                </View>
              </ScrollView>
            </View>
          )}
          <Text style={{color: '#FFFFFF', fontSize: 25}}>Player Load</Text>
          {isLoadingForPlayerLoad ? (
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
                    padding={{left: 50, bottom: 40}}
                    // containerComponent={
                    //   <VictoryZoomContainer
                    //     allowZoom={false}
                    //     allowPan={true}
                    //     zoomDimension="x"
                    //     zoomDomain={{x: [newData[0], newData[10]]}}
                    //     clipContainerComponent={<VictoryClipContainer />}
                    //   />
                    // }
                  >
                    <VictoryBar
                      style={{data: {fill: '#c43a31'}}}
                      data={playerLoadData}
                      cornerRadius={{topLeft: 5, topRight: 5}}
                      barWidth={2}
                      padding={{left: 15, right: 15}}
                      width={playerLoadData.length}
                      //domain={{x: [newData[0], newData[10]]}}
                    />
                  </VictoryChart>
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default DataVisualScreen;
