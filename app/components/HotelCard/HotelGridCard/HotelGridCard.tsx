import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ContentBody, Thumbnail } from '../components';
import { HotelCardProps } from '../HotelCard.types.ts';

import { hotelGridCardStyles as styles } from './HotelGridCard.styles.ts';

export function HotelGridCard({ hotel, onPress }: HotelCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Thumbnail imageStyle={styles.thumbnail} gallery={hotel.gallery} />
      <ContentBody {...hotel} displayType={'card'} />
    </TouchableOpacity>
  );
}
