import React from 'react';
import {Text, View} from 'react-native';

import {priceWithCurrencySymbol} from 'app/utils';

import {HotelQualityRating} from '../../../HotelQualityRating';
import {Rating} from '../../../Rating';

import {contentBodyStyles as styles} from './ContentBody.styles.ts';

type ContentBodyProps = Pick<
  Nightly.Hotel,
  'name' | 'userRating' | 'stars' | 'location' | 'price' | 'currency'
>;

export function ContentBody({
  name,
  stars,
  userRating,
  location,
  price,
  currency,
}: ContentBodyProps) {
  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.nameText}>{name}</Text>
        <Rating userRating={userRating} />
      </View>
      <HotelQualityRating stars={stars} />
      <Text style={styles.locationText}>{location.city}</Text>
      <View style={styles.pricingWrapper}>
        <Text style={styles.priceText}>
          {priceWithCurrencySymbol({price, currency})}
        </Text>
        <Text style={styles.durationText}> / night</Text>
      </View>
    </View>
  );
}
