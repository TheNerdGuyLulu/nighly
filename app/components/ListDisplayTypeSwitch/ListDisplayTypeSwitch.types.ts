import {PressableProps} from 'react-native';

export type ListDisplayType = 'list' | 'card';

export type ListDisplayTypeSwitchProps = {
  type: ListDisplayType;
} & PressableProps;
