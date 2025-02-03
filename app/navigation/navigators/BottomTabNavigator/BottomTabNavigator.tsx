import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from 'app/modules';

import {BottomTabNavigatorScreenNames, NavigatorNames} from '../../constants';
import {BottomTabNavigatorParamList} from '../../types/paramLists.ts';
import {HomeNavigator} from '../HomeNavigator';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name={NavigatorNames.HomeNavigator}
        component={HomeNavigator}
      />
      <Tab.Screen
        name={BottomTabNavigatorScreenNames.Favorites}
        component={Home}
      />
    </Tab.Navigator>
  );
}
