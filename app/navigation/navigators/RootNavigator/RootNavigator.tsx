import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Hotel } from 'app/modules';

import { NavigatorNames, RootNavigatorScreenNames } from '../../constants';
import { RootNavigatorParamList } from '../../types/paramLists.ts';
import { BottomTabNavigator } from '../BottomTabNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavigatorNames.BottomTabNavigator}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={RootNavigatorScreenNames.Hotel} component={Hotel} />
    </Stack.Navigator>
  );
}
