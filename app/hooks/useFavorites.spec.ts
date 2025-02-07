import { act, renderHook } from '@testing-library/react-native';

import { useFavorites } from './useFavorites.ts';

const ID1 = 123;
const ID2 = 321;

describe('useFavorites', () => {
  it('should add and remove from favorites', () => {
    const { result } = renderHook(useFavorites);

    expect(result.current.favorites).toEqual([]);

    act(() => {
      result.current.toggleFavorite(ID1);
    });

    expect(result.current.favorites).toEqual([ID1]);

    act(() => {
      result.current.toggleFavorite(ID2);
    });

    expect(result.current.favorites).toEqual([ID1, ID2]);

    act(() => {
      result.current.toggleFavorite(ID1);
    });

    expect(result.current.favorites).toEqual([ID2]);

    act(() => {
      result.current.toggleFavorite(ID2);
    });

    expect(result.current.favorites).toEqual([]);
  });

  it('should get if favorite by id', () => {
    const { result } = renderHook(useFavorites);

    expect(result.current.getIsFavorite(ID1)).toBeFalsy();
    expect(result.current.getIsFavorite(ID2)).toBeFalsy();

    act(() => {
      result.current.toggleFavorite(ID1);
    });

    expect(result.current.getIsFavorite(ID1)).toBeTruthy();
    expect(result.current.getIsFavorite(ID2)).toBeFalsy();

    act(() => {
      result.current.toggleFavorite(ID2);
    });

    expect(result.current.getIsFavorite(ID1)).toBeTruthy();
    expect(result.current.getIsFavorite(ID2)).toBeTruthy();
  });
});
