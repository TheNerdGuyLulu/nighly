import React from 'react';
import {TouchableOpacity} from 'react-native';

import {ContentBody, Thumbnail} from '../components';

import {hotelGridCardStyles as styles} from './HotelGridCard.styles.ts';

export function HotelGridCard(props: Nightly.Hotel) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Thumbnail imageStyle={styles.thumbnail} gallery={props.gallery} />
      <ContentBody {...props} displayType={'card'} />
    </TouchableOpacity>
  );
}
