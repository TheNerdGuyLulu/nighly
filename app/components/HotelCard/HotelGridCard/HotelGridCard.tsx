import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Favorite } from 'app/components';

import { ContentBody, Thumbnail } from '../components';
import { HotelCardProps } from '../HotelCard.types.ts';

import { hotelGridCardStyles as styles } from './HotelGridCard.styles.ts';

export function HotelGridCard({ hotel, onPress }: Readonly<HotelCardProps>) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Favorite style={styles.favorite} onPress={() => {}} isFavorite={true} />
      <Thumbnail imageStyle={styles.thumbnail} source={hotel.gallery[0]} />
      <ContentBody {...hotel} displayType={'card'} />
    </TouchableOpacity>
  );
}
