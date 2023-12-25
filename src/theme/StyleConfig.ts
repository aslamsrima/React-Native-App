import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const APP_FONTS = {
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_ITALIC: 'Poppins-Italic',
  POPPINS_SEMIBOLD: 'Poppins-SemiBold',
};

export default {
  countPixelRatio: (size: number) => size,
  responsiveHeight: (size: number) => size,
  responsiveWidth: (size: number) => size,
  smartScale: (value: number) => {
    return value;
  },
  smartWidthScale: (value: number) => {
    return value;
  },
  fontLight: APP_FONTS.POPPINS_LIGHT,
  fontRegular: APP_FONTS.POPPINS_REGULAR,
  fontMedium: APP_FONTS.POPPINS_MEDIUM,
  fontBold: APP_FONTS.POPPINS_BOLD,
  fontItalic: APP_FONTS.POPPINS_ITALIC,
  fontSemibold: APP_FONTS.POPPINS_SEMIBOLD,
  width,
  height,
  isIphone,
  isAndroid,
};
