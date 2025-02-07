import {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';

export type CarouselIndicatorsAnimationArgs = {
  currentIndex: SharedValue<number>;
  indicatorIndex: number;
};

export function useCarouselIndicatorsAnimation({
  currentIndex,
  indicatorIndex,
}: CarouselIndicatorsAnimationArgs) {
  const { theme } = useUnistyles();

  const activeIndexSV = useDerivedValue(
    () => withTiming(Number(currentIndex.value === indicatorIndex)),
    [currentIndex, indicatorIndex],
  );

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      activeIndexSV.value,
      [0, 1],
      [theme.colors.indicatorsDisabled, theme.colors.indicatorsEnabled],
    ),
  }));

  return { activeIndexSV, animatedStyles };
}
