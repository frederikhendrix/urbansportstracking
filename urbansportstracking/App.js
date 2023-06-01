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
import HorizontalBar from './components/HorizontalBar';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackScreens from './components/Main';

import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaProvider>
          <StackScreens />
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
