const sharedTheme = {
  sizes: {
    s1: 1,
    s4: 4,
    s6: 6,
    s8: 8,
    s12: 12,
    s16: 16,
    s18: 18,
    s20: 20,
    s26: 26,
    s32: 32,
  },
  fontSizes: {
    s12: 12,
    s13: 13,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
  },
  fontFamilies: {
    MADETommySoft: 'MADE Tommy Soft',
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
