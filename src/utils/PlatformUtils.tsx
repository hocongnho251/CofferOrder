import { Platform } from 'react-native';

const isAndroid = () => {
  return Platform.OS === 'android';
}

const isIos = () => {
  return Platform.OS === 'ios';
}

export const PlatformUtils = {
  isAndroid,
  isIos
}
