import React from 'react';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './navigation';

const onNavigationReady = () => {
  BootSplash.hide({fade: true});
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onNavigationReady}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
