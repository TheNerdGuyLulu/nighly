import React from 'react';
import { useTranslation } from 'react-i18next';
import Animated from 'react-native-reanimated';

import { Button, Text } from 'app/components';
import { useFooterAppearAnimation } from 'app/modules/Hotel/components/Footer/useFooterAppearAnimation.ts';
import { priceWithCurrencySymbol } from 'app/utils';

import { footerStyles as styles } from './Footer.styles.ts';

type FooterProps = Pick<Nightly.Hotel, 'price' | 'currency'>;

export function Footer({ price, currency }: Readonly<FooterProps>) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'hotel.pricing',
  });
  const { animatedStyles } = useFooterAppearAnimation();

  return (
    <Animated.View style={[styles.wrapper, animatedStyles]}>
      <Text variant={'header1'}>
        {priceWithCurrencySymbol({
          price: price,
          currency: currency,
        })}
        <Text variant={'body1Medium'}>{t('perNight')}</Text>
      </Text>
      <Button text={t('reserveARoom')} />
    </Animated.View>
  );
}
