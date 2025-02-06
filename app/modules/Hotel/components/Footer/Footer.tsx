import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Button, Text } from 'app/components';
import { priceWithCurrencySymbol } from 'app/utils';

import { footerStyles as styles } from './Footer.styles.ts';

type FooterProps = Pick<Nightly.Hotel, 'price' | 'currency'>;

export function Footer({ price, currency }: Readonly<FooterProps>) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'hotel.pricing',
  });

  return (
    <View style={styles.wrapper}>
      <Text variant={'header1'}>
        {priceWithCurrencySymbol({
          price: price,
          currency: currency,
        })}
        <Text variant={'body1Medium'}>{t('perNight')}</Text>
      </Text>
      <Button text={t('reserveARoom')} />
    </View>
  );
}
