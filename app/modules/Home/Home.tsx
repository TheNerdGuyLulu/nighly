import React from 'react';

import { HotelList } from 'app/modules/components';
import {
  BottomTabNavigatorScreenNames,
  BottomTabNavigatorScreenProps,
} from 'app/navigation';

import { useApi, useSorting } from './hooks';

type HomeProps =
  BottomTabNavigatorScreenProps<BottomTabNavigatorScreenNames.Home>;

export function Home({ navigation }: Readonly<HomeProps>) {
  const { data } = useApi();

  const sorting = useSorting({
    hotels: data,
  });
  return <HotelList {...sorting} navigation={navigation} />;
}
