import React, { ForwardedRef, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { BottomSheet, Text } from 'app/components';

import { fullDescriptionBottomSheetStyles as styles } from './FullDescriptionBottomSheet.styles.ts';

type FullDescriptionBottomSheetProps = Pick<Nightly.Hotel, 'name' | 'location'>;

function FullDescriptionBottomSheetBase(
  { name, location }: Readonly<FullDescriptionBottomSheetProps>,
  ref: ForwardedRef<BottomSheet>,
) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'hotel.detailsSection',
  });

  return (
    <BottomSheet ref={ref}>
      <BottomSheetScrollView style={styles.scrollView}>
        <Text style={styles.text} variant={'body2'}>
          {t('fullDescription', {
            name: name,
            city: location.city,
          })}
        </Text>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export const FullDescriptionBottomSheet = forwardRef<
  BottomSheet,
  FullDescriptionBottomSheetProps
>(FullDescriptionBottomSheetBase);
