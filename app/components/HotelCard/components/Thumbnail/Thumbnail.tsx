import React, {useState} from 'react';
import {
  Image,
  ImageErrorEventData,
  ImageProps,
  NativeSyntheticEvent,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {IllustrationNightly} from 'app/assets';

type ThumbnailProps = Pick<Nightly.Hotel, 'gallery'> & {
  imageStyle: ImageProps['style'];
  illustrationStyle: Pick<SvgProps, 'width' | 'height'>;
};

export function Thumbnail({
  gallery,
  illustrationStyle,
  imageStyle,
}: ThumbnailProps) {
  const [loadFailed, setLoadFailed] = useState<
    NativeSyntheticEvent<ImageErrorEventData> | undefined
  >(undefined);

  if (!gallery.length || loadFailed) {
    return (
      <IllustrationNightly
        {...illustrationStyle}
        preserveAspectRatio="xMidYMid slice"
      />
    );
  }

  return (
    <Image
      onError={setLoadFailed}
      style={imageStyle}
      source={{uri: gallery[0]}}
    />
  );
}
