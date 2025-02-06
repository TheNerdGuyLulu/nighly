import React, { useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';

import { Favorite } from 'app/components';
import { useFavorites } from 'app/hooks';
import {
  RootNavigatorParamList,
  RootNavigatorScreenNames,
} from 'app/navigation';

type DetailsFavouriteHeaderElementProps = {
  route: RouteProp<RootNavigatorParamList, RootNavigatorScreenNames.Hotel>;
};

export function DetailsFavouriteHeaderElement({
  route,
}: Readonly<DetailsFavouriteHeaderElementProps>) {
  const params = route.params;
  const { getIsFavorite, toggleFavorite } = useFavorites();

  const isFavorite = useMemo(
    () => getIsFavorite(params?.hotel.id),
    [getIsFavorite, params?.hotel.id],
  );

  const onFavoritePress = () => toggleFavorite(params?.hotel.id);

  return <Favorite onPress={onFavoritePress} isFavorite={isFavorite} />;
}
