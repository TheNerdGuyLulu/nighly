import React from 'react';
import {View} from 'react-native';

import {Text} from '../Text';

import {ratingStyles as styles} from './Rating.styles.ts';

type RatingProps = Pick<Nightly.Hotel, 'userRating'>;

export function Rating({userRating}: RatingProps) {
  return (
    <View style={styles.ratingWrapper}>
      <Text variant={'body2Black'}>{userRating}</Text>
    </View>
  );
}
