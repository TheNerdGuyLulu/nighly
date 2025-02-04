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

const theme = {
  colors: {
    Primary: '#4C4DDC',
    DarkBlue1: '#0081a7',
  },
  ...sharedTheme,
};

const darkTheme = {
  colors: {
    Primary: '#4C4DDC',
    DarkBlue1: '#0081a7',
  },
  ...sharedTheme,
};

export const appTheme = {
  lightTheme: theme,
  darkTheme,
};
