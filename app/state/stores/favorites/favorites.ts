import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { storage } from '../../middlewares';
import { createSelectors } from '../../utils';

import { Favorites } from './favorites.types.ts';

const favoritesState = create<Favorites>()(
  persist(
    set => ({
      favorites: [],
      addToFavorites: id =>
        set(state => ({
          favorites: [...state.favorites, id],
        })),
      removeFromFavorites: id =>
        set(state => ({
          favorites: [...state.favorites.filter(f => f !== id)],
        })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => storage),
    },
  ),
);

export const favorites = createSelectors(favoritesState);
