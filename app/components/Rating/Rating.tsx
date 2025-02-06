import React from 'react';
import { View } from 'react-native';

import { Text, TextVariants } from '../Text';

import { ratingStyles as styles } from './Rating.styles.ts';

type RatingProps = Pick<Nightly.Hotel, 'userRating'> & {
  size?: 'normal' | 'large';
};

export function Rating({ userRating, size = 'normal' }: Readonly<RatingProps>) {
  const variant: TextVariants =
    size === 'normal' ? 'body2Black' : 'body1Medium';

  return (
    <View style={styles.ratingWrapper}>
      <Text variant={variant}>{userRating}</Text>
    </View>
  );
}
