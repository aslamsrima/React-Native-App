import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

import styles from './styles';
import { useTheme } from '../../hooks';

interface ButtonProps {
  name?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  iconStyle?: ImageStyle;
  handleClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({ name, containerStyle, textStyle, icon, iconStyle, handleClick, isLoading = false, disabled }: ButtonProps) => {
  const { t } = useTranslation();
  const { Fonts, Colors, Layout,colorThemeVariable } = useTheme();

  return (
    <Pressable
      disabled={disabled || isLoading}
      style={[
        styles.buttonContainer,
        { backgroundColor: Colors.commonThemeColor.blue },
        isLoading || disabled ? { backgroundColor: Colors.commonThemeColor.blue } : {},
        containerStyle,
      ]}
      onPress={handleClick}
    >
      {isLoading && <ActivityIndicator size='small' style={Layout.absoluteFillObject} color={colorThemeVariable.label} />}
      <Image style={[styles.buttonIcon, iconStyle]} source={icon} />
      <Text style={[Fonts.textPopinsSemiBold, Fonts.textCenter, Fonts.textSmallPlus, Fonts.textLineHeightDefault, { color: colorThemeVariable.text }, textStyle]}>
        {isLoading ? '' : t(`${name}`)}
      </Text>
    </Pressable>
  );
};

export default Button;
