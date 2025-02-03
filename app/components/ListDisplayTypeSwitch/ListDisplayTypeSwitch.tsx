import React from 'react';
import {Pressable} from 'react-native';

import {IconList, IconRectangleGrid} from 'app/assets';

import {listDisplayTypeSwitchStyles as styles} from './ListDisplayTypeSwitch.styles.ts';
import {ListDisplayTypeSwitchProps} from './ListDisplayTypeSwitch.types';

export function ListDisplayTypeSwitch({
  type,
  ...rest
}: ListDisplayTypeSwitchProps) {
  return (
    <Pressable {...rest}>
      {type === 'card' ? (
        <IconRectangleGrid style={styles.icon} />
      ) : (
        <IconList style={styles.icon} />
      )}
    </Pressable>
  );
}
