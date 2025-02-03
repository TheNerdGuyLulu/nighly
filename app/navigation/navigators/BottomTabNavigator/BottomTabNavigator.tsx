import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from 'app/modules';
import {HomeNavigator} from 'app/navigation/navigators/HomeNavigator/HomeNavigator.tsx';

import {BottomTabNavigatorScreenNames, NavigatorName} from '../../constants';

const Tab = createBottomTabNavigator();

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
        name={NavigatorName.HomeNavigator}
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{}}
        name={BottomTabNavigatorScreenNames.Favorites}
        component={Home}
      />
    </Tab.Navigator>
  );
}
