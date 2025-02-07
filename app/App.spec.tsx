import 'react-native';

import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App.tsx';

it('renders correctly', () => {
  expect(render(<App />).toJSON()).toBeTruthy();
});
