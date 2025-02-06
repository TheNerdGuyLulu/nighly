import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { priceWithCurrencySymbol } from 'app/utils';

import { HotelQualityRating } from '../../../HotelQualityRating';
import { ListDisplayType } from '../../../ListDisplayTypeSwitch';
import { Rating } from '../../../Rating';
import { Text } from '../../../Text';

import { contentBodyStyles as styles } from './ContentBody.styles.ts';

type ContentBodyProps = Pick<
  Nightly.Hotel,
  'name' | 'userRating' | 'stars' | 'location' | 'price' | 'currency'
> & {
  displayType: ListDisplayType;
};

export function ContentBody({
  name,
  stars,
  userRating,
  location,
  price,
  currency,
  displayType,
}: Readonly<ContentBodyProps>) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'hotel.pricing',
  });

  styles.useVariants({
    displayType,
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text variant={'body2Black'} style={styles.nameText}>
          {name}
        </Text>
        <Rating userRating={userRating} />
      </View>
      <View style={styles.bodyWrapper}>
        <View style={styles.ratingLocationWrapper}>
          <HotelQualityRating stars={stars} />
          <Text variant={'body3'}>{location.city}</Text>
        </View>
        <View style={styles.pricingWrapper}>
          <Text variant={'body2Black'}>
            {priceWithCurrencySymbol({ price, currency })}
          </Text>
          <Text style={styles.durationText} variant={'caption1'}>
            {t('perNight')}
          </Text>
        </View>
      </View>
    </View>
  );
}
