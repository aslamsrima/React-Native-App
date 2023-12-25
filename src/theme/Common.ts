import { StyleSheet } from 'react-native';

import buttonStyles from './components/Buttons';

import { CommonParams } from '../../@types/theme';

import { Icon, Padding, Sizes } from './index';

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.commonThemeColor.secondary,
      },
      backgroundReset: {
        backgroundColor: Colors.commonThemeColor.white,
      },
      textInput: {
        backgroundColor: Colors.commonThemeColor.inputBackground,
        color: Colors.commonThemeColor.black,
        height: Icon.height,
        borderRadius: Sizes.cornerRadius.extraSmall,
        paddingStart: Padding.default,
      },
      kavContainer: {
        flexGrow: 1,
        paddingVertical: Padding.extraSmall,
      },
      backIcon: {
        tintColor: Colors.commonThemeColor.black,
      },
      iconStyle: {
        height: Icon.smallHeight,
        width: Icon.smallHeight,
      },
    }),
  };
}
