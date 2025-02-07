import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';

import { BottomSheet, Text } from 'app/components';
import { flagIcons } from 'app/constants';
import { StateManager } from 'app/state';

import { languageSelectorBottomSheetStyles as styles } from './LanguageSelectorBottomSheet.styles.ts';

function LanguageSelectorBottomSheetBase(
  _: any,
  ref: ForwardedRef<BottomSheet>,
) {
  const bottomSheetInternalRef = useRef<BottomSheet>(null);
  useImperativeHandle(ref, () => bottomSheetInternalRef.current!, []);

  const language = StateManager.config.use.language();
  const setLanguage = StateManager.config.use.setLanguage();
  const { t, i18n } = useTranslation('translation', {
    keyPrefix: 'languages',
  });

  const onPress = (newLanguage: string) => () => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    bottomSheetInternalRef.current?.dismiss();
  };

  const optionsArray = useMemo(() => Object.entries(flagIcons), []);

  return (
    <BottomSheet ref={bottomSheetInternalRef}>
      <BottomSheetView style={styles.bottomSheetView}>
        <Text style={styles.titleText} variant={'header2'}>
          {t('language')}
        </Text>
        <View style={styles.optionsWrapper}>
          {optionsArray.map(([lang, Icon]) => (
            <TouchableOpacity
              key={lang}
              onPress={onPress(lang)}
              style={styles.pressable(lang === language)}>
              <Icon style={styles.flagIcon} />
              <Text variant={'body2'}>{t(lang as keyof typeof flagIcons)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

export const LanguageSelectorBottomSheet = forwardRef<BottomSheet>(
  LanguageSelectorBottomSheetBase,
);
