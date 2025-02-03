import React from 'react';
import {Text, View} from 'react-native';

import {IconStar} from 'app/assets';

import {ratingStyles as styles} from './Rating.styles.ts';

type RatingProps = Pick<Nightly.Hotel, 'userRating'>;

export function Rating({userRating}: RatingProps) {
  return (
    <View style={styles.ratingWrapper}>
      <IconStar style={styles.starIcon} />
      <Text style={styles.ratingText}>{userRating}</Text>
    </View>
  );
}
