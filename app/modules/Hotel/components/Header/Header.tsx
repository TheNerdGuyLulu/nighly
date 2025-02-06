import React from 'react';
import { View } from 'react-native';

import { HotelQualityRating, Rating, Text } from 'app/components';

import { Carousel } from '../Carousel';

import { headerStyles as styles } from './Header.styles.ts';

type HeaderProps = {
  hotel: Nightly.Hotel;
};

export function Header({
  hotel: { name, stars, userRating, gallery },
}: Readonly<HeaderProps>) {
  return (
    <View>
      <Carousel gallery={gallery} />
      <View style={styles.wrapper}>
        <View style={styles.ratingsWrapper}>
          <HotelQualityRating stars={stars} size={'large'} />
          <Rating userRating={userRating} size={'large'} />
        </View>

        <Text variant={'header1'}>{name}</Text>
      </View>
    </View>
  );
}
