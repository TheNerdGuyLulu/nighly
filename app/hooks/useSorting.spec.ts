import { act, renderHook } from '@testing-library/react-native';

import { useSorting } from 'app/hooks/useSorting.ts';

import {
  hotelsMock,
  hotelsOrderByDefaultAsc,
  hotelsOrderByDefaultDesc,
  hotelsOrderByPriceAsc,
  hotelsOrderByPriceDesc,
  hotelsOrderByStarsAsc,
  hotelsOrderByStarsDesc,
  hotelsOrderByUserRatingAsc,
  hotelsOrderByUserRatingDesc,
} from '../tests';

describe('useSorting', () => {
  describe('sortBy', () => {
    it.each`
      sortBy          | direction | expectedIds                    | expected
      ${'default'}    | ${'Asc'}  | ${hotelsOrderByDefaultAsc}     | ${'default'}
      ${'default'}    | ${'Desc'} | ${hotelsOrderByDefaultDesc}    | ${'default'}
      ${'price'}      | ${'Asc'}  | ${hotelsOrderByPriceAsc}       | ${'price'}
      ${'price'}      | ${'Desc'} | ${hotelsOrderByPriceDesc}      | ${'price'}
      ${'stars'}      | ${'Asc'}  | ${hotelsOrderByStarsAsc}       | ${'stars'}
      ${'stars'}      | ${'Desc'} | ${hotelsOrderByStarsDesc}      | ${'stars'}
      ${'userRating'} | ${'Asc'}  | ${hotelsOrderByUserRatingAsc}  | ${'userRating'}
      ${'userRating'} | ${'Desc'} | ${hotelsOrderByUserRatingDesc} | ${'userRating'}
    `(
      'should sort by $expected',
      ({ sortBy, direction, expectedIds, expected }) => {
        const { result } = renderHook(useSorting, {
          initialProps: {
            hotels: hotelsMock,
          },
        });

        expect(result.current.sortBy).toEqual('default');

        act(() => {
          console.log(sortBy, direction);
          result.current.setSortBy(sortBy);
          result.current.setSortDirection(direction);
        });

        expect(result.current.sortBy).toEqual(expected);
        expect(
          result.current.sortedHotels.map((hotel: { id: any }) => hotel.id),
        ).toEqual(expectedIds);
      },
    );
  });
});
