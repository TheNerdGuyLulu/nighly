import React from 'react';
import {Text, View} from 'react-native';

import {ratingStyles as styles} from './Rating.styles.ts';

type RatingProps = Pick<Nightly.Hotel, 'userRating'>;

export function Rating({userRating}: RatingProps) {
  return (
    <View style={styles.ratingWrapper}>
      <Text style={styles.ratingText}>{userRating}</Text>
    </View>
  );
}
