export type FavoritesState = {
  favorites: Nightly.Hotel['id'][];
};

export type FavoritesAction = {
  addToFavorites: (id: Nightly.Hotel['id']) => void;
  removeFromFavorites: (id: Nightly.Hotel['id']) => void;
};

export type Favorites = FavoritesState & FavoritesAction;
