require('react-native-reanimated').setUpTests();

jest.mock('react-native-unistyles', () => ({
  useUnistyles: jest.fn(),
}));
