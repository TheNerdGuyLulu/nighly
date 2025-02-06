import { StateManager } from 'app/state';

type FavoritesArgs = {
  id?: number;
};

export function useFavorites({ id }: FavoritesArgs) {
  const addToFavorites = StateManager.favorites.use.addToFavorites();
  const removeFromFavorites = StateManager.favorites.use.removeFromFavorites();
  const favorites = StateManager.favorites.use.favorites();

  const isFavorite = id ? favorites.find(favorite => favorite === id) : false;

  const toggleFavorite = () => {
    if (!id) return;

    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return {
    isFavorite,
    toggleFavorite,
  };
}
