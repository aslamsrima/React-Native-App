import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import i18next from 'i18next';
import styles from './styles';
import { Routes } from '../../navigators/routes';
import { ThemeState } from '../../../@types/theme';
import { ExampleScreenProps } from 'template/@types/navigation';

const Example = ({ navigation }: ExampleScreenProps) => {
  const { t } = useTranslation(['example', 'welcome']);
  const { Common, Fonts, Gutters, Layout, Images, darkMode: isDark } = useTheme();
  const { changeTheme, colorThemeVariable } = useTheme();

  // Method for updating the theme on tap on the button
  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    // call custom theme hook function to update the theme value with reducer.
    changeTheme(theme, darkMode);
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  const handleSignUp = () => {
    navigation.navigate(Routes.SignUpScreen);
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
        { backgroundColor: colorThemeVariable.background },
      ]}
    >
      <View style={[Layout.fill, Layout.relative, Layout.fullWidth, Layout.justifyContentCenter, Layout.alignItemsCenter]}>
        <View
          style={[
            styles.container,
            Layout.absolute,
            {
              backgroundColor: colorThemeVariable.circleBg,
            },
          ]}
        />
        <Image style={[Layout.absolute, styles.imageLeftBottom]} source={Images.sparkles.bottomLeft} resizeMode={'contain'} />
        <View style={[Layout.absolute, styles.brandContainer]}>
          <Brand height={200} width={200} />
        </View>
        <Image style={[Layout.absolute, Layout.fill, styles.imageTopLeft]} source={Images.sparkles.topLeft} resizeMode={'contain'} />
        <Image style={[Layout.absolute, styles.imageTopRight]} source={Images.sparkles.top} resizeMode={'contain'} />
        <Image style={[Layout.absolute, styles.imageStar]} source={Images.sparkles.topRight} resizeMode={'contain'} />
        <Image style={[Layout.absolute, styles.imageRight]} source={Images.sparkles.right} resizeMode={'contain'} />
        <Image style={[Layout.absolute, styles.imageBottom]} source={Images.sparkles.bottom} resizeMode={'contain'} />
        <Image style={[Layout.absolute, styles.imageCenter]} source={Images.sparkles.bottomRight} resizeMode={'contain'} />
      </View>
      <View style={[Layout.fill, Layout.justifyContentBetween, Layout.alignItemsStart, Layout.fullWidth, Gutters.regularHPadding]}>
        <View>
          <Text style={[isDark ? Fonts.titleRegularWhite : Fonts.titleRegularBlack, { color: colorThemeVariable.title }]}>{t('welcome:title')}</Text>
          <Text style={[Fonts.textBold, Gutters.regularBMargin, { color: colorThemeVariable.subTitle }]}>{t('welcome:subtitle')}</Text>
          <Text style={[Fonts.textSmall, Fonts.textLight, { color: colorThemeVariable.description }]}>{t('welcome:description')}</Text>
        </View>

        <View style={[Layout.row, Layout.justifyContentBetween, Layout.fullWidth, Gutters.smallTMargin]}>
          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin, { backgroundColor: colorThemeVariable.iconBg }]}
            onPress={() => onChangeTheme({ darkMode: !isDark })}
          >
            <Image source={Images.icons.colors} style={{ tintColor: colorThemeVariable.icon }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[Common.button.circle, styles.signUpButton, { backgroundColor: colorThemeVariable.circleBg }]}
            onPress={handleSignUp}
          >
            <Text style={{ color: colorThemeVariable.label }}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin, { backgroundColor: colorThemeVariable.iconBg }]}
            onPress={() => onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')}
          >
            <Image source={Images.icons.translate} style={{ tintColor: colorThemeVariable.icon }} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Example;
