import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, Pressable, Text, TextStyle, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { useTheme } from '../../hooks';

export interface MenuBarProps {
  containerStyle?: ViewStyle;
  title: string;
  textStyle?: TextStyle;
  leftIcon: ImageSourcePropType;
  onLeftClickListener?: () => void;
  rightContainerView?: () => JSX.Element;
  leftIconStyle?: ImageStyle;
  safeAreaContainerStyle?: ViewStyle;
}

const MenuBar = React.memo(
  ({ containerStyle, title, textStyle, leftIcon, onLeftClickListener, rightContainerView, leftIconStyle, safeAreaContainerStyle }: MenuBarProps) => {
    const { Fonts, Layout,colorThemeVariable } = useTheme();

    return (
      <SafeAreaView edges={['right', 'top', 'left']} style={[styles.menuBar, safeAreaContainerStyle]}>
        <View style={[Layout.row, Layout.alignItemsCenter, styles.container, containerStyle]}>
          <View style={Layout.flexTwo}>
            {leftIcon && (
              <Pressable style={[Layout.alignSelfStart, styles.iconContainer]} onPress={onLeftClickListener} hitSlop={10}>
                <Image source={leftIcon} style={[styles.iconStyle, { tintColor: colorThemeVariable.tintColor}, leftIconStyle]} resizeMode='contain' />
              </Pressable>
            )}
          </View>
        <Text
            style={[Fonts.textPopinsSemiBold, Fonts.textLineHeightDefault, Fonts.textCenter, Fonts.textSmallPlus, { color: colorThemeVariable.text },styles.title,textStyle]}
            numberOfLines={1}
          >
            {title}
          </Text>
          <View style={[Layout.alignItemsEnd, Layout.flexTwo]}>{rightContainerView?.()}</View>
        </View>
      </SafeAreaView>
    );
  },
);

export default MenuBar;
