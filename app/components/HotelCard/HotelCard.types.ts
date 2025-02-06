export type HotelCardProps = {
  hotel: Nightly.Hotel;
  onPress?: () => void;
  isFavorite: boolean;
  onFavoritePress?: () => void;
};
