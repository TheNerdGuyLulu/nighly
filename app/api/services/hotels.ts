import { client } from './axiosClient';
import { ENDPOINTS } from './services.constants.ts';

export const getHotels = async () => {
  const response = await client.get<Nightly.Hotel[]>(ENDPOINTS.hotels);

  return response.data;
};
