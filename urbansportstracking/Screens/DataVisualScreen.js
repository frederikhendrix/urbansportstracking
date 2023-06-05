import {View, Text} from 'react-native';
import React from 'react';

const DataVisualScreen = ({route}) => {
  const routeDate = route.params.date;
  const routeName = route.params.name.item;
  console.log(route.params.name.item);
  return (
    <View
      style={{flex: 1, backgroundColor: '#191D18', flexDirection: 'column'}}>
      <View style={{margin: 20, flexDirection: 'column'}}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>{routeName}</Text>
        <Text style={{color: '#F2F2F2'}}>{routeDate}</Text>
      </View>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Text
          style={{
            color: '#93C123',
            marginRight: 20,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Impact Stat
        </Text>
        <Text style={{color: '#93C123', fontWeight: 'bold', fontSize: 16}}>
          Force Instant
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          height: '40%',
          backgroundColor: '#FFFFFF',
          alignSelf: 'center',
        }}></View>
    </View>
  );
};

export default DataVisualScreen;
