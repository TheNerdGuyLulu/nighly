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
    primary: '#4C4DDC',
    darkBlue1: '#0081a7',

    border1: '#eee',

    text1: '#000',
    text2: '#434346',

    icon1: '#1a1818',

    background1: '#fff',
    background2: '#fbfdff',
    background3: '#e5e5e5',
    background4: '#c8c8f4',
    background5: '#eae8e8',
  },
  ...sharedTheme,
};

const dark = {
  colors: {
    primary: '#4C4DDC',
    darkBlue1: '#0081a7',

    border1: 'transparent',

    text1: '#fff',
    text2: '#ddc9c9',

    icon1: '#e3e3e3',

    background1: '#001524',
    background2: '#00385f',
    background3: '#074671',
    background4: '#eeeefb',
  },
  ...sharedTheme,
};

export const appTheme = {
  light,
  dark,
};
