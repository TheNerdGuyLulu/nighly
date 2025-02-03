import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Hotel} from 'app/modules';

import {HomeNavigatorScreenNames} from '../../constants';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name={HomeNavigatorScreenNames.Home}
        component={Home}
        options={{}}
      />
      <Stack.Screen name={HomeNavigatorScreenNames.Hotel} component={Hotel} />
    </Stack.Navigator>
  );
}
