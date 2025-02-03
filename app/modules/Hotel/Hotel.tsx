import React, {useEffect} from 'react';
import {Image, View} from 'react-native';

export function Hotel({navigation, route}) {
  const {hotel} = route.params as {hotel: Nightly.Hotel};

  useEffect(() => {
    navigation.setOptions({title: hotel.name});
  }, []);

  return (
    <View>
      <Image
        style={{width: '100%', height: 200}}
        source={{uri: hotel.gallery[0]}}
      />
    </View>
  );
}
