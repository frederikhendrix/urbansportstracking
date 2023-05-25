import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GiftedCharts from './components/GiftedCharts';
import {SafeAreaView} from 'react-native-safe-area-context';
import VerticalBar from './components/VerticalBar';

const App = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
      }}>
      <ScrollView>
        <View style={{flexDirection: 'column'}}>
          <GiftedCharts />
          <VerticalBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
