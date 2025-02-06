import { useCallback } from 'react';

import { StateManager } from 'app/state';

export function useFavorites() {
  const addToFavorites = StateManager.favorites.use.addToFavorites();
  const removeFromFavorites = StateManager.favorites.use.removeFromFavorites();
  const favorites = StateManager.favorites.use.favorites();

  const getIsFavorite = useCallback(
    (id: number) => !!favorites.find(favorite => favorite === id),
    [favorites],
  );

  const toggleFavorite = (id: number) => {
    if (!id) return;

    if (getIsFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return {
    favorites,
    getIsFavorite,
    toggleFavorite,
  };
}
