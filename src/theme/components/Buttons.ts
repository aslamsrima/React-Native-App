import { StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Gutters.regularHPadding,
    height: 40,
    backgroundColor: Colors.commonThemeColor.secondary,
  };
  const rounded = {
    ...base,
    borderRadius: 10,
  };
  const circle = {
    ...Layout.center,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.commonThemeColor.white,
    color: Colors.commonThemeColor.white,
    fill: Colors.commonThemeColor.white,
  };

  return StyleSheet.create({
    base,
    rounded,
    circle,
    outline: {
      ...base,
      backgroundColor: Colors.commonThemeColor.white,
      borderWidth: 2,
      borderColor: Colors.commonThemeColor.secondary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.commonThemeColor.white,
      borderWidth: 2,
      borderColor: Colors.commonThemeColor.secondary,
    },
  });
}
