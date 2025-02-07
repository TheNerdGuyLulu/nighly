import { useEffect } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export function useFooterAppearAnimation() {
  const openAnimationSV = useSharedValue(0);

  useEffect(() => {
    openAnimationSV.value = withDelay(
      150,
      withTiming(1, {
        duration: 500,
      }),
    );
  }, [openAnimationSV]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(openAnimationSV.value, [0, 1], [200, 0]),
      },
    ],
  }));

  return { animatedStyles };
}
