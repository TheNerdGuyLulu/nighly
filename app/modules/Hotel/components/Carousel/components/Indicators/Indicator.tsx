import React from 'react';
import Animated from 'react-native-reanimated';

import { indicatorStyles as styles } from './Indicator.styles.ts';
import {
  CarouselIndicatorsAnimationArgs,
  useCarouselIndicatorsAnimation,
} from './useCarouselIndicatorsAnimation.ts';

export type IndicatorProps = CarouselIndicatorsAnimationArgs;

export function Indicator({
  currentIndex,
  indicatorIndex,
}: Readonly<IndicatorProps>) {
  const { animatedStyles } = useCarouselIndicatorsAnimation({
    currentIndex,
    indicatorIndex,
  });

  return <Animated.View style={[styles.indicator, animatedStyles]} />;
}
