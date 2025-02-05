// Copied from https://github.com/nirsky/react-native-size-matters/blob/master/lib/scaling-utils.js

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

/**
 * Scales size proportionally based on the device's width.
 */
const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

/**
 * Scales size proportionally based on the device's height.
 */
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

/**
 * Moderates horizontal scaling with a customizable factor.
 */
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

/**
 * Moderates vertical scaling with a customizable factor.
 */
const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;

type SizeKeys<T extends readonly number[]> = {
  readonly [K in T[number] as `s${K}`]: ReturnType<typeof s>;
};

type VerticalSizeKeys<T extends readonly number[]> = {
  readonly [K in T[number] as `s${K}`]: ReturnType<typeof vs>;
};

export const generateSizes = <T extends readonly number[]>(
  scalingFn: (value: number) => number,
  values: T,
): Readonly<SizeKeys<T> | VerticalSizeKeys<T>> => {
  return Object.fromEntries(
    values.map(value => [`s${value}`, scalingFn(value)]),
  ) as Readonly<SizeKeys<T> | VerticalSizeKeys<T>>;
};
