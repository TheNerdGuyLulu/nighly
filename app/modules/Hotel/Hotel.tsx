import React, { useRef } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { BottomSheet, Text } from 'app/components';
import {
  RootNavigatorScreenNames,
  RootNavigatorScreenProps,
} from 'app/navigation';
import { StateManager } from 'app/state';

import { Body, Footer, FullDescriptionBottomSheet, Header } from './components';
import { hotelStyles as styles } from './Hotel.styles.ts';

type HotelProps = RootNavigatorScreenProps<RootNavigatorScreenNames.Hotel>;

export function Hotel({ route }: Readonly<HotelProps>) {
  const { hotel } = route.params;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const addToFavorites = StateManager.favorites.use.addToFavorites();

  const onReadMorePress = () => bottomSheetRef.current?.present();

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <Header hotel={hotel} />
        </View>
        <TouchableOpacity onPress={() => addToFavorites(hotel.id)}>
          <Text variant={'body3Medium'}>Add to Favorites</Text>
        </TouchableOpacity>
        <View style={styles.bodyWrapper}>
          <Body hotel={hotel} onReadMorePress={onReadMorePress} />
        </View>
      </ScrollView>
      <Footer price={hotel.price} currency={hotel.currency} />

      <FullDescriptionBottomSheet
        ref={bottomSheetRef}
        name={hotel.name}
        location={hotel.location}
      />
    </BottomSheetModalProvider>
  );
}
