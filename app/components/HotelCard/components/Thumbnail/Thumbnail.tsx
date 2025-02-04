import React, { useState } from 'react';
import {
  Image,
  ImageErrorEventData,
  ImageProps,
  NativeSyntheticEvent,
} from 'react-native';

import { IllustrationNightlyBG } from 'app/assets';

type ThumbnailProps = Pick<Nightly.Hotel, 'gallery'> & {
  imageStyle: ImageProps['style'];
};

export function Thumbnail({ gallery, imageStyle }: ThumbnailProps) {
  const [loadFailed, setLoadFailed] = useState<
    NativeSyntheticEvent<ImageErrorEventData> | undefined
  >(undefined);

  if (!gallery.length || loadFailed) {
    // I could use an SVG here, but it's flickering a bit when changing between list and card display types
    return <Image style={imageStyle} source={IllustrationNightlyBG} />;
  }

  return (
    <Image
      onError={setLoadFailed}
      style={imageStyle}
      source={{ uri: gallery[0] }}
    />
  );
}
