import { StateStorage } from 'zustand/middleware';

import { mmkvStorage } from 'app/storage';

export const storage: StateStorage = {
  getItem: (key: string): string | null => mmkvStorage.getString(key) ?? null,
  setItem: (key: string, value: string): void => {
    mmkvStorage.set(key, value);
  },
  removeItem: (key: string): void => {
    mmkvStorage.delete(key);
  },
};
