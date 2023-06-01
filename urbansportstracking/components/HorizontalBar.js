import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

const HorizontalBar = () => {
  const data = [
    {quarter: 'Gemiddelde', earnings: 13000},
    {quarter: 'Maximaal', earnings: 16500},
  ];
  return (
    <View style={styles.container}>
      <VictoryChart
        horizontal={true}
        width={350}
        theme={VictoryTheme.material}
        domain={{y: [0, 20000]}}
        height={250}
        domainPadding={{x: [80, 80]}}
        padding={{left: 90, bottom: 50, right: 30}}
        colorScale={['blue', 'blue']}>
        <VictoryBar
          categories={{
            x: ['Maximaal', 'Gemiddelde'],
          }}
          data={[
            {x: 'Gemiddelde', y: 15000},
            {x: 'Maximaal', y: 20000},
          ]}
          barWidth={60}
          barRatio={5}
          cornerRadius={{topLeft: 10, topRight: 10}}
          style={{data: {fill: 'green'}}}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    paddingTop: 50,
  },
});

export default HorizontalBar;
