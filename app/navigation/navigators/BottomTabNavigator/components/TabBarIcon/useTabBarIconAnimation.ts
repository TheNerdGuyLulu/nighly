import {
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';

type TabBarLabelAnimationArgs = {
  focused: boolean;
};

export function useTabBarIconAnimation({ focused }: TabBarLabelAnimationArgs) {
  const { theme } = useUnistyles();

  const focusedSV = useDerivedValue(
    () => withTiming(Number(focused)),
    [focused],
  );

  const iconAnimatedProps = useAnimatedProps(() => ({
    color: interpolateColor(
      focusedSV.value,
      [0, 1],
      [theme.colors.icon3, theme.colors.icon1],
    ),
  }));

  return { iconAnimatedProps };
}
