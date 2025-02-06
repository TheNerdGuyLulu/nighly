import { useEffect, useState } from 'react';

import { ENV } from 'app/constants';

// We could use axios with React Query or GraphQL depending on the requirements,
// But I'll not do anything else to not overcomplicate
const getData = async () => {
  const data = await fetch(ENV.api);
  return await data.json();
};

export function useApi() {
  const [data, setData] = useState<Nightly.Hotel[]>();

  useEffect(() => {
    getData().then(setData);
  }, []);

  return { data };
}
