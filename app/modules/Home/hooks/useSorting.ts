import { useMemo, useState } from 'react';

import { SortingOptions } from 'app/constants';

type SortingArgs = {
  hotels: Nightly.Hotel[] | undefined;
};

const sortByAsc =
  (by: keyof Nightly.Hotel) => (a: Nightly.Hotel, b: Nightly.Hotel) =>
    (a[by] as number) - (b[by] as number);

const sortByDesc =
  (by: keyof Nightly.Hotel) => (a: Nightly.Hotel, b: Nightly.Hotel) =>
    (b[by] as number) - (a[by] as number);

const sort: Record<
  `${Nightly.SortBy}${Nightly.SortDirection}`,
  ((a: Nightly.Hotel, b: Nightly.Hotel) => number) | undefined
> = {
  priceAsc: sortByAsc('price'),
  priceDesc: sortByDesc('price'),
  starsAsc: sortByAsc('stars'),
  starsDesc: sortByDesc('stars'),
  userRatingAsc: sortByAsc('userRating'),
  userRatingDesc: sortByDesc('userRating'),
  defaultAsc: undefined,
  defaultDesc: undefined,
} as const;

export function useSorting({ hotels }: SortingArgs) {
  const [sortDirection, setSortDirection] =
    useState<Nightly.SortDirection>('Asc');
  const [sortBy, setSortBy] = useState<Nightly.SortBy>('default');

  const sortedHotels = useMemo(() => {
    if (sortBy === 'default' && sortDirection === 'Desc') {
      // Hopefully some day we'll have toReversed in RN
      // For now, we'll just create a new array and reverse it
      // @ts-expect-error newly added function, ignore error
      return hotels?.toReversed();
    }

    return hotels?.sort(sort[`${sortBy}${sortDirection}`]);
  }, [hotels, sortBy, sortDirection]);

  const toggleSortDirection = () =>
    setSortDirection(prev => (prev === 'Asc' ? 'Desc' : 'Asc'));

  return {
    sortedHotels,
    sortOptions: SortingOptions,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    toggleSortDirection,
  };
}
