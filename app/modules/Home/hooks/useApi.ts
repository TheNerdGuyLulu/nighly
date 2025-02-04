import { useEffect, useMemo, useState } from 'react';

import { ENV } from 'app/constants';

const getData = async () => {
  const data = await fetch(ENV.api);
  return await data.json();
};

const sortByPriceAsc = (a: Nightly.Hotel, b: Nightly.Hotel) =>
  a.price - b.price;

const sortByPriceDesc = (a: Nightly.Hotel, b: Nightly.Hotel) =>
  b.price - a.price;

const sort = {
  priceAsc: sortByPriceAsc,
  priceDesc: sortByPriceDesc,
} as const;

export function useApi() {
  const [data, setData] = useState<Nightly.Hotel[]>();
  const [sortBy, setSortBy] = useState<keyof typeof sort>('priceAsc');

  const sortedData = useMemo(() => data?.sort(sort[sortBy]), [data, sortBy]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return { data: sortedData, sortBy };
}
