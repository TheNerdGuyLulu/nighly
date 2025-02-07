import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { storage } from '../../middlewares';
import { createSelectors } from '../../utils';

import { Config } from './config.types.ts';

const configState = create<Config>()(
  persist(
    set => ({
      language: 'en',
      setLanguage: language => set({ language }),
    }),
    {
      name: 'config',
      storage: createJSONStorage(() => storage),
    },
  ),
);

export const config = createSelectors(configState);
