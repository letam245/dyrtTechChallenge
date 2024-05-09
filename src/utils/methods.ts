import { Alert, Linking, Platform } from 'react-native';
import { ERROR_MESSAGE } from './constant';

export const openPhoneSetting = () => {
  Linking.canOpenURL('app-settings:')
    .then(supported => {
      if (supported) {
        Linking.openSettings();
      }
    })
    .catch(err => console.error('An error occurred', err));
};

export const showLocationAccessAlert = () => {
  return Alert.alert(
    'Location Permission is needed',
    ERROR_MESSAGE.LOCATION_REQUEST,
    [
      {
        text: 'Go to setting',
        onPress: () =>
          Platform.OS === 'ios' ? openPhoneSetting() : Linking.openSettings(),
      },
      { text: 'Cancel' },
    ],
  );
};
