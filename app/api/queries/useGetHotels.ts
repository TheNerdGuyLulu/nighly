import { useQuery } from '@tanstack/react-query';

import { getHotels } from '../services/hotels';

import { QUERY_KEYS } from './query.constants.ts';

export function useGetHotels() {
  return useQuery<Nightly.Hotel[]>({
    queryKey: [QUERY_KEYS.hotels],
    queryFn: getHotels,
  });
}
