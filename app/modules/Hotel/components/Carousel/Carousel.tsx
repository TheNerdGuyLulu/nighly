import React from 'react';
import { Image, ListRenderItemInfo, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { IllustrationNightlyBG } from 'app/assets';
import { Thumbnail } from 'app/components';

import { carouselStyles as styles } from './Carousel.styles.ts';
import { Indicators } from './components';

type CarouselProps = Pick<Nightly.Hotel, 'gallery'>;

const renderItem = ({ item }: ListRenderItemInfo<string>) => {
  return <Thumbnail imageStyle={styles.image} source={item} />;
};

export function Carousel({ gallery }: Readonly<CarouselProps>) {
  const activeIndexSV = useSharedValue<number>(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    activeIndexSV.value = Math.round(
      (event.contentOffset.x - event.layoutMeasurement.width) /
        event.layoutMeasurement.width +
        1,
    );
  });

  if (!gallery.length) {
    return <Image style={styles.image} source={IllustrationNightlyBG} />;
  }

  return (
    <View>
      {/**
       On development, the framerate of the swipe animation is low
       On release is fluid
       **/}
      <Animated.FlatList
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={gallery}
        renderItem={renderItem}
        onScroll={scrollHandler}
      />
      {gallery.length > 1 && (
        <Indicators size={gallery.length} currentIndex={activeIndexSV} />
      )}
    </View>
  );
}
