import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from 'app/modules';

import { BottomTabNavigatorScreenNames } from '../../constants';
import { BottomTabNavigatorParamList } from '../../types/paramLists.ts';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={BottomTabNavigatorScreenNames.Home} component={Home} />
      <Tab.Screen
        name={BottomTabNavigatorScreenNames.Favorites}
        component={View}
      />
    </Tab.Navigator>
  );
}
