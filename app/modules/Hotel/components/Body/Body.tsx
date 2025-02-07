import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

import { Tag, Text } from 'app/components';
import { linkTo } from 'app/utils';

import { features } from './Body.constants.ts';
import { bodyStyles as styles } from './Body.styles.ts';

type BodyProps = {
  hotel: Nightly.Hotel;
  onReadMorePress?: () => void;
};

// Let's shuffle and remove 5 of the items to display something different for every hotel detail
// Of course, it also means that in every re-render for the same hotel, the list will be different
const shuffledFeatures = [...features]
  .sort(() => Math.random() - 0.5)
  .slice(0, 6);

export function Body({
  hotel: { name, location, contact, checkIn, checkOut },
  onReadMorePress,
}: Readonly<BodyProps>) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'hotel',
  });

  return (
    <View style={styles.wrapper}>
      {/*** DETAILS SECTION ***/}
      <View style={styles.blockWrapper}>
        <Text variant={'header2'}>{t('detailsSection.detailsTitle')}</Text>
        <Text variant={'body2'}>
          {t('detailsSection.description', {
            name,
            city: location.city,
          })}{' '}
          <Text onPress={onReadMorePress} variant={'body2Medium'}>
            {t('detailsSection.readMore')}
          </Text>
        </Text>
      </View>

      {/*** FEATURES SECTION ***/}
      <View style={styles.blockWrapper}>
        <Text variant={'header2'}>{t('featuresSection.featuresTitle')}</Text>
        <View style={styles.featuresTagsWrapper}>
          {shuffledFeatures.map((props, i) => (
            <Tag
              key={props.description}
              {...props}
              description={t(`featuresSection.${props.description}`)}
            />
          ))}
        </View>
      </View>

      {/*** INFORMATION SECTION ***/}
      <View style={styles.blockWrapper}>
        <Text variant={'header2'}>
          {t('informationSection.informationTitle')}
        </Text>
        <View>
          <Text variant={'body2Medium'}>{t('informationSection.checkIn')}</Text>
          <Text variant={'body2'}>
            {t('informationSection.fromTo', {
              from: checkIn.from,
              to: checkIn.to,
            })}
          </Text>
        </View>
        <View>
          <Text variant={'body2Medium'}>
            {t('informationSection.checkOut')}
          </Text>
          <Text variant={'body2'}>
            {t('informationSection.fromTo', {
              from: checkOut.from,
              to: checkOut.to,
            })}
          </Text>
        </View>
        <View>
          <Text variant={'body2Medium'}>{t('informationSection.address')}</Text>
          <TouchableOpacity
            onPress={linkTo(
              'location',
              `${location.latitude},${location.longitude}`,
            )}>
            <Text variant={'body2'}>
              {`${location.address}\n${location.city}`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*** CONTACTS SECTION ***/}
      <View style={styles.blockWrapper}>
        <Text variant={'header2'}>{t('contactsSection.contactsTitle')}</Text>
        {Object.entries(contact).map(([key, value], i) => (
          <View key={key}>
            <Text variant={'body2Medium'}>
              {t(`contactsSection.${key as Nightly.Contacts}`)}
            </Text>
            <TouchableOpacity
              onPress={linkTo(key as Nightly.Contacts, value)}
              hitSlop={6}>
              <Text variant={'body2'}>{value}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
