import React, { ForwardedRef, forwardRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { BottomSheet, Text } from 'app/components';
import { sortingByTranslationKeys, SortingOptions } from 'app/constants';

import { sortBottomSheetStyles as styles } from './SortBottomSheet.styles.ts';

type SortByKeys = keyof typeof SortingOptions;

type SortBottomSheetProps = {
  sortBy: SortByKeys;
  options: typeof SortingOptions;
  onSelect: (sortBy: SortByKeys) => void;
};

function SortBottomSheetBase(
  { sortBy, options, onSelect }: Readonly<SortBottomSheetProps>,
  ref: ForwardedRef<BottomSheet>,
) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'sorting',
  });

  const onPress = (sortBy: SortByKeys) => () => onSelect(sortBy);

  const optionsArray = useMemo(() => Object.values(options), [options]);

  return (
    <BottomSheet ref={ref}>
      <BottomSheetView style={styles.bottomSheetView}>
        <Text style={styles.titleText} variant={'header2'}>
          {t('sortByTitle')}
        </Text>
        <View style={styles.optionsWrapper}>
          {optionsArray.map(option => (
            <TouchableOpacity
              key={option}
              onPress={onPress(option as SortByKeys)}
              style={styles.pressable(option === sortBy)}>
              <Text variant={'body2'}>
                {t(sortingByTranslationKeys[option])}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

export const SortBottomSheet = forwardRef<BottomSheet, SortBottomSheetProps>(
  SortBottomSheetBase,
);
