import { renderHook } from '@testing-library/react-native';

import { useFooterAppearAnimation } from './useFooterAppearAnimation.ts';

type StylesProps = {
  current: {
    animatedStyles: {
      initial: {
        value: {
          transform: [{ translateY: number }];
        };
      };
      jestAnimatedStyle: {
        current: {
          value: {
            transform: [{ translateY: number }];
          };
        };
      };
    };
  };
};

jest.useFakeTimers();

describe('useCarouselIndicatorsAnimation', () => {
  it('should animated to 0 after 500ms delay', () => {
    const { result } = renderHook(useFooterAppearAnimation);

    expect(
      (result as unknown as StylesProps).current.animatedStyles.initial.value
        .transform[0].translateY,
    ).toBe(200);

    jest.advanceTimersByTime(150);

    expect(
      (result as unknown as StylesProps).current.animatedStyles
        .jestAnimatedStyle.current.value.transform[0].translateY,
    ).toBe(200);

    jest.advanceTimersByTime(1);
    expect(
      (result as unknown as StylesProps).current.animatedStyles
        .jestAnimatedStyle.current.value.transform[0].translateY,
    ).toBe(199.9984);

    jest.advanceTimersByTime(499);

    expect(
      (result as unknown as StylesProps).current.animatedStyles
        .jestAnimatedStyle.current.value.transform[0].translateY,
    ).toBe(0);
  });
});
