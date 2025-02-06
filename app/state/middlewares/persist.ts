import { StateStorage } from 'zustand/middleware';

import { MMKV } from 'app/storage';

export const storage: StateStorage = {
  getItem: (key: string): string | null => MMKV.getString(key) ?? null,
  setItem: (key: string, value: string): void => {
    MMKV.setString(key, value);
  },
  removeItem: (key: string): void => {
    MMKV.removeItem(key);
  },
};
