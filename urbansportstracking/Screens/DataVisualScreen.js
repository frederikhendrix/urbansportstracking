import {View, Text} from 'react-native';
import React from 'react';

const DataVisualScreen = ({route}) => {
  const routeDate = route.params.date;
  const routeName = route.params.name;
  console.log(route.params);
  return (
    <View
      style={{flex: 1, backgroundColor: '#191D18', flexDirection: 'column'}}>
      <Text style={{color: '#FFFFFF'}}>{routeName}</Text>
    </View>
  );
};

export default DataVisualScreen;
