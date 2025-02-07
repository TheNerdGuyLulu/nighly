import { act, renderHook } from '@testing-library/react-native';

import { useListDisplayType } from './useListDisplayType.ts';

describe('useListDisplayType', () => {
  it('should be toggle from list to card, and then from card to list', () => {
    const { result } = renderHook(useListDisplayType);

    expect(result.current.listDisplayType).toBe('list');

    act(() => {
      result.current.onToggleListDisplayType();
    });

    expect(result.current.listDisplayType).toBe('card');

    act(() => {
      result.current.onToggleListDisplayType();
    });

    expect(result.current.listDisplayType).toBe('list');
  });
});
