import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

import {
  IconFlagDE,
  IconFlagES,
  IconFlagFR,
  IconFlagGB,
  IconFlagIT,
  IconFlagPL,
  IconFlagPT,
} from 'app/assets';

export const flagIcons: Record<Nightly.Language, FC<SvgProps>> = {
  en: IconFlagGB,
  it: IconFlagIT,
  de: IconFlagDE,
  pl: IconFlagPL,
  pt: IconFlagPT,
  es: IconFlagES,
  fr: IconFlagFR,
} as const;
