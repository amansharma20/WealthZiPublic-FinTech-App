/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',

};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  paddingExtraLarge: 48,
  paddingLarge: 34,
  padding1: 28,
  padding2: 24,
  padding3: 22,
  padding4: 20,
  padding5: 18,
  padding6: 16,

  // font sizes
  largeTitle: 36,
  header: 24,
  buttonText: 22,
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {

  proxima900: Platform.select({
    android: 'Proxima-900',
    ios: 'ProximaNova-Extrabold'
  }),
  proxima800: Platform.select({
    android: 'Proxima-800',
    ios: 'ProximaNova-Bold'
  }),
  proxima700: Platform.select({
    android: 'Proxima-700',
    // ios: 'ProximaNova-Bold'
  }),
  proxima500: Platform.select({
    android: 'Proxima-500',
    ios: 'ProximaNova-Regular'
  }),
  proxima400: Platform.select({
    android: 'Proxima-400',
    ios: 'Proxima Nova'
  }),
};


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
