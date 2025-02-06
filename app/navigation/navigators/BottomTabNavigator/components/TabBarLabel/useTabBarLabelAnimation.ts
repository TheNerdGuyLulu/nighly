import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';

type TabBarLabelAnimationArgs = {
  focused: boolean;
};

export function useTabBarLabelAnimation({ focused }: TabBarLabelAnimationArgs) {
  const { theme } = useUnistyles();

  const focusedSV = useDerivedValue(
    () => withTiming(Number(focused)),
    [focused],
  );

  const labelAnimation = useAnimatedStyle(() => ({
    color: interpolateColor(
      focusedSV.value,
      [0, 1],
      [theme.colors.text5, theme.colors.text1],
    ),
  }));

  return { labelAnimation };
}
