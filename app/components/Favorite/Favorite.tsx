import React, { useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { IconHeart, IconHeartFilled } from 'app/assets';

import { favoriteStyles as styles } from './Favorite.styles.ts';

export type FavoriteProps = {
  isFavorite: boolean;
  onPress: () => void;
} & TouchableOpacityProps;

export function Favorite({ isFavorite, ...rest }: FavoriteProps) {
  const Icon = useMemo(
    () => (isFavorite ? IconHeartFilled : IconHeart),
    [isFavorite],
  );

  return (
    <TouchableOpacity
      {...rest}
      hitSlop={15}
      style={[styles.pressable, rest.style]}>
      <Icon style={styles.icon} />
    </TouchableOpacity>
  );
}
