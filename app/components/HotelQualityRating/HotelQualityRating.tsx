import React from 'react';
import {View} from 'react-native';

import {IconStarFilled} from 'app/assets';

import {hotelQualityRatingStyles as styles} from './HotelQualityRating.styles.ts';

type HotelQualityRatingProps = {
  stars: number;
};

export function HotelQualityRating({stars}: HotelQualityRatingProps) {
  return (
    <View style={styles.wrapper}>
      {Array.from({length: stars}, (_, i) => (
        <IconStarFilled key={i} style={styles.starIcon} />
      ))}
    </View>
  );
}
