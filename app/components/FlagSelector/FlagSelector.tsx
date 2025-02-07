import { useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { flagIcons } from 'app/constants';
import { StateManager } from 'app/state';

import { flagSelectorStyles as styles } from './FlagSelector.styles.ts';

type FlagSelectorProps = TouchableOpacityProps;

export function FlagSelector({ ...rest }: Readonly<FlagSelectorProps>) {
  const language = StateManager.config.use.language();

  const Icon = useMemo(() => flagIcons[language], [language]);

  return (
    <TouchableOpacity hitSlop={8} {...rest}>
      <Icon style={styles.icon} />
    </TouchableOpacity>
  );
}
