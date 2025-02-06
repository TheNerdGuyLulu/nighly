import React, { useMemo } from 'react';
import { View } from 'react-native';

import { IconStarFilled } from 'app/assets';

import { hotelQualityRatingStyles as styles } from './HotelQualityRating.styles.ts';

type HotelQualityRatingProps = {
  stars: number;
  size?: 'normal' | 'large';
};

export function HotelQualityRating({
  stars,
  size = 'normal',
}: Readonly<HotelQualityRatingProps>) {
  styles.useVariants({
    size,
  });

  const starsArray = useMemo(
    () =>
      Array.from({ length: stars }, (_, i) => (
        <IconStarFilled key={i} style={styles.starIcon} />
      )),
    [stars],
  );

  return <View style={styles.wrapper}>{starsArray}</View>;
}
