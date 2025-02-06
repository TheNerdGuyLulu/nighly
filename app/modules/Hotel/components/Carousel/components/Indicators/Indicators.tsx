import React from 'react';
import { View } from 'react-native';

import { Indicator, IndicatorProps } from './Indicator.tsx';
import { indicatorsStyles as styles } from './Indicators.styles.ts';

type IndicatorsProps = {
  size: number;
} & Pick<IndicatorProps, 'currentIndex'>;

export function Indicators({ size, currentIndex }: IndicatorsProps) {
  return (
    <View style={styles.wrapper}>
      {Array.from({ length: size }, (_, i) => (
        <Indicator key={i} indicatorIndex={i} currentIndex={currentIndex} />
      ))}
    </View>
  );
}
