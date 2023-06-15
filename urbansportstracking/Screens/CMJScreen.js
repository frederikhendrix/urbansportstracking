import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
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





const CMJScreen = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://145.93.108.31:44301/api/countermovementjump/all',
        );
        console.log('UseEffect for CMJ Data');
        console.log(response.data);
        setData(
          response.data.map(obj => {
            return {
              x: obj.id,
              y: obj.acc_Y,
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
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CMJScreen;
