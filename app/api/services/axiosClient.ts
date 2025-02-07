import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { ENV } from 'app/constants';

export const client = axios.create({
  baseURL: ENV.api,
});

export const queryClient = new QueryClient();
