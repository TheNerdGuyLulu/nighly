import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigatorName} from '../../constants';
import {BottomTabNavigator} from '../BottomTabNavigator';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigatorName.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
