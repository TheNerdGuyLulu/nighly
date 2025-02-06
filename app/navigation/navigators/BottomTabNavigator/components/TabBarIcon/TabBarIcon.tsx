import React, { ComponentClass } from 'react';
import { AnimatedProps } from 'react-native-reanimated';
import { SvgProps } from 'react-native-svg';

import { tabBarIconStyles as styles } from './TabBarIcon.styles.ts';
import { useTabBarIconAnimation } from './useTabBarIconAnimation.ts';

export type TabBarIconProps = {
  icon: ComponentClass<AnimatedProps<SvgProps>>;
  focused: boolean;
  color: string;
  size: number;
};

export function TabBarIcon({ icon: Icon, focused }: Readonly<TabBarIconProps>) {
  const { iconAnimatedProps } = useTabBarIconAnimation({ focused });

  return <Icon animatedProps={iconAnimatedProps} style={styles.icon} />;
}
