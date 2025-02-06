import React from 'react';
import { FlatList, Image, ListRenderItemInfo } from 'react-native';

import { IllustrationNightlyBG } from 'app/assets';
import { Thumbnail } from 'app/components';

import { carouselStyles as styles } from './Carousel.styles.ts';

type CarouselProps = Pick<Nightly.Hotel, 'gallery'>;

const renderItem = ({ item }: ListRenderItemInfo<string>) => {
  return <Thumbnail imageStyle={styles.image} source={item} />;
};

export function Carousel({ gallery }: Readonly<CarouselProps>) {
  if (!gallery.length) {
    return <Image style={styles.image} source={IllustrationNightlyBG} />;
  }

  return (
    <FlatList
      bounces={false}
      horizontal
      pagingEnabled
      data={gallery}
      renderItem={renderItem}
    />
  );
}
