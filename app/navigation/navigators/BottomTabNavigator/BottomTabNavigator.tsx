import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconHeartFilled, IconHomeFilled } from 'app/assets';
import { Favorites, Home } from 'app/modules';
import { createAnimatedComponent } from 'app/utils';

import { BottomTabNavigatorScreenNames } from '../../constants';
import { BottomTabNavigatorParamList } from '../../types/paramLists.ts';

import { TabBarIcon, TabBarIconProps, TabBarLabel } from './components';

const AnimatedIconHomeFilled = createAnimatedComponent(IconHomeFilled);
const AnimatedIconHeartFilled = createAnimatedComponent(IconHeartFilled);

const HomeTabBarIcon = (props: Omit<TabBarIconProps, 'icon'>) => {
  return <TabBarIcon {...props} icon={AnimatedIconHomeFilled} />;
};

const FavoritesTabBarIcon = (props: Omit<TabBarIconProps, 'icon'>) => {
  return <TabBarIcon {...props} icon={AnimatedIconHeartFilled} />;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // There's a bug within react navigation/react-native-screens that causes random crash when switching tabs
      // This seems to only affect New Architecture
      // Disable for now until a fix is provided
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false,
        tabBarLabel: TabBarLabel,
      }}>
      <Tab.Screen
        name={BottomTabNavigatorScreenNames.Home}
        component={Home}
        options={{ tabBarIcon: HomeTabBarIcon }}
      />
      <Tab.Screen
        name={BottomTabNavigatorScreenNames.Favorites}
        component={Favorites}
        options={{
          tabBarIcon: FavoritesTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}
