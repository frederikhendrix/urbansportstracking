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
import Slider from '@react-native-community/slider';
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
  const [totalPlayerLoad, setTotalPlayerLoad] = useState(0);

  const [threshHold, setThreshHold] = useState(0);
  const [averagePlayerLoad, setAveragePlayerLoad] = useState(0);
  const [totalImpactForceP, setTotalImpacForceP] = useState(0);
  const [impactForce, setImpactForce] = useState([]);
  const [totalImpactForceKG, setTotalImpactForceKG] = useState(0);
  const [averageImpactForceKG, setAverageImpactForceKG] = useState(0);
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
            'http://172.17.144.1:44301/api/trainingsession/' +
              route.params.name,
          )
          .catch(error => {
            console.log(error + 'Training');
          });
        console.log('UseEffect for training data');
        console.log(response.data.impacts.length);
        setImpactForce(response.data);
        setData(
          response.data.impacts.map(obj => {
            const percentageOfBodyweight =
              (obj.impactForce / 9.8 / parseInt(weight, 10)) * 100;
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
            'http://192.168.2.18:44301/api/accelerationwithplayerload/all/' +
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
        setPlayerLoad(response.data);
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

  useEffect(() => {
    var count = 0;
    for (let index = 0; index < playerLoad.length; index++) {
      const element = playerLoad[index];
      count = count + element.playerLoad;
    }
    setTotalPlayerLoad(Math.floor(count));
    setAveragePlayerLoad(Math.floor(count / playerLoad.length));
  }, [playerLoad]);

  useEffect(() => {
    var count = 0;
    var amount = 0;
    console.log('Useeffect impactforce average');
    if (impactForce.length !== 0) {
      for (let index = 0; index < impactForce.impacts.length; index++) {
        const element = impactForce.impacts[index];
        if (element.impactForce / 9.8 > threshHold) {
          count = count + element.impactForce / 9.8;
          amount++;
        }
      }
      setAverageImpactForceKG(Math.floor(count / amount));
    }
  }, [threshHold]);
  useEffect(() => {
    var count = 0;
    console.log('Useeffect impactforce');
    if (impactForce.length !== 0) {
      for (let index = 0; index < impactForce.impacts.length; index++) {
        const element = impactForce.impacts[index];
        count = count + element.impactForce / 9.8;
      }
      setTotalImpactForceKG(Math.floor(count / parseInt(weight)));
      // setAverageImpactForceKG(Math.floor(count / impactForce.impacts.length));
    }
  }, [impactForce]);
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
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 25,
              alignSelf: 'center',
              margin: 5,
            }}>
            Impact Force
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              alignSelf: 'center',
              margin: 5,
            }}>
            Total impact force = {totalImpactForceKG} Times bodyweight
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 25,
              alignSelf: 'center',
              margin: 5,
            }}>
            Average impact force = {averageImpactForceKG} kg
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              alignSelf: 'center',
              margin: 5,
            }}>
            {threshHold}
          </Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#8E23C1"
            minimumTrackTintColor="#93C123"
            maximumTrackTintColor="#93C123"
            value={1}
            onValueChange={value => setThreshHold(parseInt(value))}
            style={{
              width: 300,
              marginBottom: 10,
              alignSelf: 'center',
            }}></Slider>
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
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 25,
              alignSelf: 'center',
              margin: 5,
            }}>
            Player Load
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              alignSelf: 'center',
              margin: 5,
            }}>
            Total Player Load = {totalPlayerLoad}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              alignSelf: 'center',
              margin: 5,
            }}>
            Average Player Load = {averagePlayerLoad}
          </Text>
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
