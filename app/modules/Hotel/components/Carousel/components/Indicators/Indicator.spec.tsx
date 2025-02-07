import { render } from '@testing-library/react-native';

import { Indicator } from './Indicator.tsx';

jest.useFakeTimers();

describe('Indicator', () => {
  it('should have enabled styles', () => {
    const screen = render(
      // @ts-expect-error no need to mock the rest
      <Indicator currentIndex={{ value: 1 }} indicatorIndex={1} />,
    );

    expect(screen.getByTestId('indicator')).toHaveStyle({
      backgroundColor: 'rgba(7, 70, 113, 1)',
    });
  });

  it('should have disabled styles', () => {
    const screen = render(
      // @ts-expect-error no need to mock the rest
      <Indicator currentIndex={{ value: 0 }} indicatorIndex={1} />,
    );

    expect(screen.getByTestId('indicator')).toHaveStyle({
      backgroundColor: 'rgba(255, 255, 255, 1)',
    });
  });
});
