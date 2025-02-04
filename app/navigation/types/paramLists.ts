import { NavigatorScreenParams } from '@react-navigation/native';

import {
  BottomTabNavigatorScreenNames,
  NavigatorNames,
  RootNavigatorScreenNames,
} from '../constants';

export type RootNavigatorParamList = {
  [NavigatorNames.BottomTabNavigator]: NavigatorScreenParams<BottomTabNavigatorParamList>;
  [RootNavigatorScreenNames.Hotel]: {
    hotel: Nightly.Hotel;
  };
};

export type BottomTabNavigatorParamList = {
  [BottomTabNavigatorScreenNames.Home]: undefined;
  [BottomTabNavigatorScreenNames.Favorites]: undefined;
};
