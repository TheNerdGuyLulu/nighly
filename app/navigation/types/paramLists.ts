import {NavigatorScreenParams} from '@react-navigation/native';

import {
  BottomTabNavigatorScreenNames,
  HomeNavigatorScreenNames,
  NavigatorNames,
} from '../constants';

export type RootNavigatorParamList = {
  [NavigatorNames.BottomTabNavigator]: NavigatorScreenParams<BottomTabNavigatorParamList>;
};

export type BottomTabNavigatorParamList = {
  [NavigatorNames.HomeNavigator]: NavigatorScreenParams<HomeNavigatorParamList>;
  [BottomTabNavigatorScreenNames.Favorites]: {};
};

export type HomeNavigatorParamList = {
  [HomeNavigatorScreenNames.Home]: undefined;
  [HomeNavigatorScreenNames.Hotel]: {
    hotel: Nightly.Hotel;
  };
};
