import MaskedView from '@react-native-masked-view/masked-view';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  LayoutChangeEvent,
  Pressable,
  ReturnKeyTypeOptions,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

import styles from './styles';
import { AutoCapitalizeType } from '../../../@types/common';
import useTheme from '../../hooks/useTheme';

import { specialCharacters } from '../../utils/Constants';

interface TextInputFieldProps {
  placeholder?: string;
  label?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  secureTextEntry?: boolean;
  numberOfLines?: number;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  tiInputStyle?: StyleProp<TextStyle>;
  multiLine?: boolean;
  handleRightIconClick?: () => void;
  autoCapitalize?: AutoCapitalizeType;
  isEditable?: boolean;
  validationError?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  rightIcon?: ImageSourcePropType | null;
  reference?: (ref: TextInput) => void;
  onSubmitEditing?: () => void;
  defaultCountry?: { countryCode: CountryCode; callingCode: string };
  onChangeCountryCode?: (callingCode: string) => void;
  borderStyle?: StyleProp<ViewStyle>;
  isFromBottomSheet?: boolean;
}

const TextInputField = ({
  placeholder,
  label,
  onChangeText,
  value,
  keyboardType,
  returnKeyType,
  maxLength,
  numberOfLines,
  textInputContainerStyle,
  tiInputStyle,
  multiLine,
  autoCapitalize,
  isEditable,
  validationError,
  onFocus,
  onBlur,
  rightIcon,
  secureTextEntry,
  handleRightIconClick,
  reference,
  onSubmitEditing,
  defaultCountry,
  onChangeCountryCode,
  isFromBottomSheet = false,
  borderStyle,
}: TextInputFieldProps) => {
  const { Colors, Fonts, Layout, colorThemeVariable } = useTheme();
  const { t } = useTranslation(['validationErrors']);
  const [countryPickerVisible, setVisible] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>(defaultCountry?.callingCode || '');
  const [labelWidth, setLabelWidth] = useState<number>(0);

  const TextInputComponent = useMemo(() => (isFromBottomSheet ? TextInput : TextInput), [isFromBottomSheet]);

  const onSelect = (country: Country) => {
    const callingCode = `${specialCharacters.plus}${country.callingCode[0]}`;
    setCountryCode(callingCode);
    onChangeCountryCode?.(callingCode);
    handleCountryPickerVisibility();
  };

  const handleCountryPickerVisibility = () => {
    setVisible((prev) => !prev);
  };

  const getTextWidth = (event: LayoutChangeEvent) => {
    setLabelWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={[styles.container, textInputContainerStyle]}>
      <MaskedView
        style={[Layout.absolute, Layout.right0, Layout.left0, styles.borderContainer, borderStyle]}
        maskElement={<View style={[Layout.fill, Layout.fullHeight, { borderColor: colorThemeVariable.border }, styles.textInputBorder]} />}
      >
        <View style={[Layout.row, Layout.halfHeight]}>
          <View style={[{ backgroundColor: Colors.commonThemeColor.gray91 }, styles.labelLeftMargin]} />
          <View style={{ width: labelWidth }} />
          <View style={[Layout.fill, { backgroundColor: Colors.commonThemeColor.gray91 }]} />
        </View>
        <View style={[Layout.halfHeight, Layout.fill, { backgroundColor: Colors.commonThemeColor.gray91 }]} />
      </MaskedView>
      <Text style={[Layout.absolute, Fonts.textPopinsRegular, { color: Colors.commonThemeColor.gray }, styles.labelText]} onLayout={getTextWidth}>
        {t(label as unknown as TemplateStringsArray)}
      </Text>
      <View style={[styles.inputContainer, Layout.row, Layout.alignItemsCenter]}>
        {defaultCountry && (
          <>
            <Pressable hitSlop={5} onPress={handleCountryPickerVisibility}>
              <Text style={[Fonts.textPopinsRegular, { color: colorThemeVariable.text }, styles.countryCode]}>{countryCode}</Text>
            </Pressable>
            <CountryPicker
              countryCode={defaultCountry?.countryCode}
              withFlagButton={false}
              visible={countryPickerVisible}
              onSelect={onSelect}
              withFilter={true}
              withCallingCode={true}
            />
          </>
        )}
        <TextInputComponent
          ref={reference}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          multiline={multiLine}
          secureTextEntry={secureTextEntry}
          editable={isEditable}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={onSubmitEditing}
          placeholder={`${t(placeholder as unknown as TemplateStringsArray)}`}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={colorThemeVariable.placeholderText}
          style={[Layout.fill, Fonts.textSmall, { color: colorThemeVariable.inputValue }, styles.textInput, tiInputStyle]}
        />
        {rightIcon && (
          <Pressable onPress={handleRightIconClick} hitSlop={10}>
            <Image style={[styles.icon, { tintColor: 'red' }]} source={rightIcon} />
          </Pressable>
        )}
      </View>
      {validationError && (
        <Text style={[Fonts.textError, Fonts.textSmallPlus, styles.validationError]}>{t(validationError as unknown as TemplateStringsArray)}</Text>
      )}
    </View>
  );
};

export default TextInputField;
