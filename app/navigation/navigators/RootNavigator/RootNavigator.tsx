import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Hotel } from 'app/modules';

import { NavigatorNames, RootNavigatorScreenNames } from '../../constants';
import { RootNavigatorParamList } from '../../types/paramLists.ts';
import { BottomTabNavigator } from '../BottomTabNavigator';

import { DetailsFavouriteHeaderElement } from './components';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const FavoriteHeaderRightElement =
  (route: RouteProp<RootNavigatorParamList, RootNavigatorScreenNames.Hotel>) =>
  () => <DetailsFavouriteHeaderElement route={route} />;

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
      <Stack.Screen
        name={RootNavigatorScreenNames.Hotel}
        component={Hotel}
        options={({ route }) => ({
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
          headerRight: FavoriteHeaderRightElement(route),
        })}
      />
    </Stack.Navigator>
  );
}
