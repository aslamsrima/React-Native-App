import { StyleSheet } from 'react-native';

import StyleConfig from './StyleConfig';
import { ThemeVariables } from '../../@types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    textTiny: {
      fontSize: FontSize.tiny,
      color: Colors.commonThemeColor.black,
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.commonThemeColor.white,
    },
    textSmallPlus: {
      fontSize: FontSize.smallPlus,
      color: Colors.commonThemeColor.white,
    },
    textRegularBlack: {
      fontSize: FontSize.regular,
      color: Colors.commonThemeColor.black,
    },
    textRegularWhite: {
      fontSize: FontSize.regular,
      color: Colors.commonThemeColor.white,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.commonThemeColor.black,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    titleSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
      color: Colors.commonThemeColor.black,
    },
    titleRegularBlack: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.commonThemeColor.black,
    },
    titleRegularWhite: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.commonThemeColor.white,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.commonThemeColor.black,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.commonThemeColor.red,
    },
    textSuccess: {
      color: Colors.commonThemeColor.secondary,
    },
    textPrimary: {
      color: Colors.commonThemeColor.secondary,
    },
    textLight: {
      color: Colors.commonThemeColor.lightGrey,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
    textPopinsBold: {
      fontFamily: StyleConfig.fontBold,
    },
    textPopinsSemiBold: {
      fontFamily: StyleConfig.fontSemibold,
    },
    textPopinsRegular: {
      fontFamily: StyleConfig.fontRegular,
    },
    textLineHeightDefault: {
      lineHeight: StyleConfig.countPixelRatio(26),
    },
  });
}
