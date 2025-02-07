const { appTheme } = require('../app/theme/theme');
let theme = appTheme.light;

const runtime = {
  screen: {
    width: 200,
    height: 600,
  },
  insets: {
    top: 34,
    bottom: 34,
    left: 0,
    right: 0,
  },
};

module.exports = {
  UnistylesRuntime: {
    hasAdaptiveThemes: false,

    setTheme: newTheme => {
      theme = newTheme;
    },
  },
  useUnistyles: () => ({
    theme: theme,
    rt: runtime,
  }),
  StyleSheet: {
    configure: config => {
      theme = config.themes.light;
    },

    create: styles => {
      if (typeof styles === 'function') {
        return { ...styles(theme, runtime), useVariants: () => ({}) };
      }

      return styles;
    },
  },
};
