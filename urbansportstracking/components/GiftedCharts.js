import React from 'react';
import {ScrollView} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {
  VictoryChart,
  VictoryBar,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';

const GiftedCharts = () => {
  const barData = [
    {x: '00:00:00', y: 250},
    {x: '00:00:01', y: 350},
    {x: '00:00:02', y: 50},
    {x: '00:00:03', y: 250},
    {x: '00:00:04', y: 2150},
    {x: '00:00:05', y: 510},
    {x: '00:00:06', y: 80},
    {x: '00:00:07', y: 250},
    {x: '00:00:08', y: 350},
    {x: '00:00:09', y: 50},
    {x: '00:00:10', y: 250},
    {x: '00:00:11', y: 2150},
    {x: '00:00:12', y: 510},
    {x: '00:00:13', y: 80},
    {x: '00:00:14', y: 250},
    {x: '00:00:15', y: 350},
    {x: '00:00:16', y: 50},
    {x: '00:00:17', y: 250},
    {x: '00:00:18', y: 2150},
    {x: '00:00:19', y: 510},
    {x: '00:00:20', y: 80},
    {x: '00:00:21', y: 250},
    {x: '00:00:22', y: 350},
    {x: '00:00:23', y: 50},
    {x: '00:00:24', y: 250},
    {x: '00:00:25', y: 2150},
    {x: '00:00:26', y: 510},
    {x: '00:00:27', y: 80},
    {x: '00:00:28', y: 250},
    {x: '00:00:29', y: 350},
    {x: '00:00:30', y: 50},
    {x: '00:00:31', y: 250},
    {x: '00:00:32', y: 2150},
    {x: '00:00:33', y: 510},
    {x: '00:00:34', y: 80},
    {x: '00:00:35', y: 250},
    {x: '00:00:36', y: 350},
    {x: '00:00:37', y: 50},
    {x: '00:00:38', y: 250},
    {x: '00:00:39', y: 2150},
    {x: '00:00:40', y: 510},
    {x: '00:00:41', y: 80},
  ];

  const currentDate = new Date(); // Get the current date

  const newData = barData.map(obj => {
    const [hours, minutes, seconds] = obj.x.split(':');
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      hours,
      minutes,
      seconds,
    );

    return {
      x: newDate,
      y: obj.y,
    };
  });

  return (
    <View style={{flex: 1, margin: 20}}>
      <ScrollView horizontal>
        <View>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={10}
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
              data={newData}
              cornerRadius={{topLeft: 5, topRight: 5}}
              barWidth={17}
              padding={{left: 5, right: 5}}
              width={newData.length * 80}
              //domain={{x: [newData[0], newData[10]]}}
            />
          </VictoryChart>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    width: 600,
    paddingTop: 50,
  },
});

export default GiftedCharts;
