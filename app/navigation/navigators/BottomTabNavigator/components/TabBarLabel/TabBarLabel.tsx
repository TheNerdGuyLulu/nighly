import React from 'react';

import { Text } from 'app/components';
import { createAnimatedComponent } from 'app/utils';

import { tabBarLabelStyles as styles } from './TabBarLabel.styles.ts';
import { useTabBarLabelAnimation } from './useTabBarLabelAnimation.ts';

type TabBarLabelProps = {
  focused: boolean;
  color: string;
  position: 'beside-icon' | 'below-icon';
  children: string;
};

const AnimatedText = createAnimatedComponent(Text);

export function TabBarLabel({ focused, children }: Readonly<TabBarLabelProps>) {
  const { labelAnimation } = useTabBarLabelAnimation({ focused });

  styles.useVariants({
    focused,
  });

  return (
    <AnimatedText
      style={[styles.text, labelAnimation]}
      variant={'caption2Medium'}>
      {children}
    </AnimatedText>
  );
}
