import React from 'react';
import {TouchableOpacity} from 'react-native';

import {ContentBody, Thumbnail} from '../components';

import {hotelListCardStyles as styles} from './HotelListCard.styles.ts';

export function HotelListCard(props: Nightly.Hotel) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Thumbnail
        illustrationStyle={styles.illustration}
        imageStyle={styles.thumbnail}
        gallery={props.gallery}
      />
      <ContentBody {...props} />
    </TouchableOpacity>
  );
}
