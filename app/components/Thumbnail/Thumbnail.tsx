import React, { useState } from 'react';
import {
  Image,
  ImageErrorEventData,
  ImageProps,
  NativeSyntheticEvent,
} from 'react-native';

import { IllustrationNightlyBG } from 'app/assets';

type ThumbnailProps = {
  source: string;
  imageStyle: ImageProps['style'];
};

export function Thumbnail({ source, imageStyle }: Readonly<ThumbnailProps>) {
  const [loadFailed, setLoadFailed] = useState<
    NativeSyntheticEvent<ImageErrorEventData> | undefined
  >(undefined);

  if (!source || loadFailed) {
    // I could use an SVG here, but it's flickering a bit when changing between list and card display types
    return <Image style={imageStyle} source={IllustrationNightlyBG} />;
  }

  return (
    <Image
      onError={setLoadFailed}
      style={imageStyle}
      source={{ uri: source }}
    />
  );
}
