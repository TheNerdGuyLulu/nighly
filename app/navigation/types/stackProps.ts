import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  BottomTabNavigatorParamList,
  RootNavigatorParamList,
} from './paramLists';

export type RootNavigatorScreenProps<T extends keyof RootNavigatorParamList> =
  NativeStackScreenProps<RootNavigatorParamList, T>;

export type BottomTabNavigatorScreenProps<
  T extends keyof BottomTabNavigatorParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabNavigatorParamList, T>,
  RootNavigatorScreenProps<any>
>;
