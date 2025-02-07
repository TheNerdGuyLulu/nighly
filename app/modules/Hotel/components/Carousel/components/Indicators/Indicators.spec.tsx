import { render } from '@testing-library/react-native';

import { Indicators } from './Indicators.tsx';

describe('Indicators', () => {
  it('renders correct quantity', async () => {
    const screen = render(
      <Indicators
        // @ts-expect-error no need to mock everything
        currentIndex={{ value: 0 }}
        size={20}
      />,
    );

    expect(screen.getAllByTestId('indicator')).toHaveLength(20);
  });
});
