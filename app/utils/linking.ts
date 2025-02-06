import { Linking, Platform } from 'react-native';

export const linkTo =
  (type: Nightly.Contacts | 'location', url: string) => () => {
    let prefix = '';

    if (type === 'location') {
      prefix = Platform.select({
        ios: 'https://maps.apple.com/?q=',
        android: 'geo',
        default: 'geo:',
      });
    } else if (type === 'phoneNumber') {
      prefix = 'tel:';
    } else if (type === 'email') {
      prefix = 'mailto:';
    }

    Linking.openURL(`${prefix}${url}`);
  };
