const sharedTheme = {
  sizes: {
    s8: 8,
    s18: 18,
  },
};

const theme = {
  colors: {
    Primary: '#4C4DDC',
  },
  ...sharedTheme,
};

const darkTheme = {
  colors: {
    Primary: '#4C4DDC',
  },
  ...sharedTheme,
};

export const appTheme = {
  lightTheme: theme,
  darkTheme,
};
