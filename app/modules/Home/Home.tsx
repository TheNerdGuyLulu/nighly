import React from 'react';

import { useApi, useSorting } from 'app/hooks';
import {
  BottomTabNavigatorScreenNames,
  BottomTabNavigatorScreenProps,
} from 'app/navigation';

import { HotelList } from '../components';

type HomeProps =
  BottomTabNavigatorScreenProps<BottomTabNavigatorScreenNames.Home>;

export function Home({ navigation }: Readonly<HomeProps>) {
  const { data } = useApi();

  const sorting = useSorting({
    hotels: data,
  });
  return <HotelList {...sorting} navigation={navigation} />;
}
