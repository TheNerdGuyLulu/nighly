import 'react-native';

import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../app/App';

it('renders correctly', () => {
  expect(render(<App />).toJSON()).toBeTruthy();
});
