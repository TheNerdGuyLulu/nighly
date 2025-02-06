import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { IconArrowDown, IconArrowUp } from 'app/assets';

import { Text } from '../Text';

import { sortByStyles as styles } from './SortBy.styles.ts';

type SortByProps = {
  sortBy: Nightly.SortBy;
  direction: Nightly.SortDirection;
  sortByPressable: TouchableOpacityProps;
  directionPressable: TouchableOpacityProps;
} & Pick<ViewProps, 'style'>;

export function SortBy({
  sortBy,
  direction,
  directionPressable,
  sortByPressable,
}: SortByProps) {
  const { theme } = useUnistyles();
  const { t } = useTranslation('translation', {
    keyPrefix: 'sorting',
  });

  return (
    <View style={[styles.wrapper]}>
      <TouchableOpacity
        {...directionPressable}
        style={[styles.pressable, directionPressable.style]}>
        {direction === 'Asc' ? (
          <IconArrowUp color={theme.colors.text1} style={styles.sortIcon} />
        ) : (
          <IconArrowDown color={theme.colors.text1} style={styles.sortIcon} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        {...sortByPressable}
        style={[styles.pressable, sortByPressable.style]}>
        <Text variant={'body3'} style={styles.text}>
          {t('sortBy')}
          <Text variant={'body3Medium'}>{t(sortBy)}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
