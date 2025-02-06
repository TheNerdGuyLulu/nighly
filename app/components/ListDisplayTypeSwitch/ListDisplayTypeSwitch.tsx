import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { IconList, IconRectangleGrid } from 'app/assets';

import { listDisplayTypeSwitchStyles as styles } from './ListDisplayTypeSwitch.styles.ts';
import { ListDisplayTypeSwitchProps } from './ListDisplayTypeSwitch.types.ts';

export function ListDisplayTypeSwitch({
  type,
  ...rest
}: Readonly<ListDisplayTypeSwitchProps>) {
  const { theme } = useUnistyles();
  return (
    <TouchableOpacity {...rest} style={[styles.pressable, rest.style]}>
      {type === 'card' ? (
        <IconRectangleGrid color={theme.colors.icon1} style={styles.icon} />
      ) : (
        <IconList color={theme.colors.icon1} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
}
