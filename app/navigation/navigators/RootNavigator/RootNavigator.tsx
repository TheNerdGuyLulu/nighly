import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigatorNames} from '../../constants';
import {RootNavigatorParamList} from '../../types/paramLists.ts';
import {BottomTabNavigator} from '../BottomTabNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigatorNames.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
