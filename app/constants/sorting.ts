export enum SortingOptions {
  'default' = 'default',
  'price' = 'price',
  'stars' = 'stars',
  'userRating' = 'userRating',
}

export const sortingByTranslationKeys = {
  [SortingOptions.default]: 'byDefault',
  [SortingOptions.price]: 'byPrice',
  [SortingOptions.stars]: 'byStarsRating',
  [SortingOptions.userRating]: 'byUserRating',
} as const;
