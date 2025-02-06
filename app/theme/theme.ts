import { s } from 'app/utils';

const sharedTheme = {
  sizes: {
    s1: s(1),
    s4: s(4),
    s6: s(6),
    s8: s(8),
    s12: s(12),
    s16: s(16),
    s18: s(18),
    s20: s(20),
    s26: s(26),
    s32: s(32),
  },
  fontSizes: {
    s10: s(10),
    s12: s(12),
    s13: s(13),
    s14: s(14),
    s16: s(16),
    s20: s(20),
    s24: s(24),
  },
  fontFamilies: {
    MADETommySoftBlack: 'MADE Tommy Soft Black',
    MADETommySoftExtraBold: 'MADE Tommy Soft Extra Bold',
    MADETommySoftBold: 'MADE Tommy Soft Bold',
    MADETommySoftLight: 'MADE Tommy Soft Light',
    MADETommySoftMedium: 'MADE Tommy Soft Medium',
    MADETommySoftRegular: 'MADE Tommy Soft Regular',
    MADETommySoftThin: 'MADE Tommy Soft Thin',
  },
};

const light = {
  colors: {
    border1: '#eee',
    border2: '#3a2746',

    text1: '#000',
    text2: '#434346',
    text3: '#313131',
    text4: '#fff',
    text5: '#9b9696',

    icon1: '#1a1818',
    icon2: '#bbabcd',
    icon3: '#ddd',
    icon4: '#f50d63',

    indicatorsEnabled: '#074671',
    indicatorsDisabled: '#fff',

    background1: '#fff',
    background2: '#fbfdff',
    background3: '#e5e5e5',
    background4: '#f1f1f6',
    background5: '#f4f4f4',

    stars1: '#ffd33c',

    shadow1: '#fff',
  },
  ...sharedTheme,
};

const dark = {
  colors: {
    border1: 'transparent',
    border2: '#eee',

    text1: '#fff',
    text2: '#ddc9c9',
    text3: '#e7d7d7',
    text4: '#fff',
    text5: '#9b9696',

    icon1: '#e3e3e3',
    icon2: '#dbd7e1',
    icon3: '#000',
    icon4: '#fff',

    indicatorsEnabled: '#163244',
    indicatorsDisabled: '#eee',

    background1: '#001524',
    background2: '#00385f',
    background3: '#074671',
    background4: '#163244',
    background5: '#3c3c3c',

    stars1: '#ffd33c',

    shadow1: '#000',
  },
  ...sharedTheme,
};

export const appTheme = {
  light,
  dark,
};
