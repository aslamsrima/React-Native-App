import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import { SignUpScreenProps } from '../../../../@types/navigation';
import { Button, TextInputField, GradientBackground, MenuBar } from '../../../components';
import useTheme from '../../../hooks/useTheme';

import { typeOfSignUp } from '../../../utils/Enum';
import { InputConfig } from '../../../utils/InputConfig';
import { signUpValidation } from '../../../utils/YupValidation';
import { useLoader } from '../../../hooks';
import { localStronage } from '../../../store';
import { DefaultCountry } from '../../../utils/Constants';
import { ValidationError } from 'yup';

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const { isLoading, updateLoader } = useLoader();

  const [tiFullName, setTiFullName] = useState<string>('');
  const [tiEmail, setTiEmail] = useState<string>('');
  const [tiPhoneNumber, setTiPhoneNumber] = useState<string>('');
  const [tiPassword, setTiPassword] = useState<string>('');
  const [tiConfirmPassword, setTiConfirmPassword] = useState<string>('');
  const [validationError, setValidationError] = useState<Record<string, string>>({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [inputList, setInputList] = useState(InputConfig.SignUpInput);
  const [countryCode, setCountryCode] = useState<string>(DefaultCountry.callingCode);
  const { t } = useTranslation(['signup']);
  const { Fonts, Colors, Layout, Images, Common, colorThemeVariable } = useTheme();
  const inputRef = useRef<(TextInput | undefined)[]>([]);

  const handleOnLeftClick = () => {
    navigation.goBack();
  };

  const handleChangeText = (text: string, index: number) => {
    const updatedValidationError = { ...validationError };
    switch (index) {
      case typeOfSignUp.FullName:
        updatedValidationError.fullName = '';
        setTiFullName(text);
        break;
      case typeOfSignUp.Email:
        updatedValidationError.email = '';
        setTiEmail(text);
        break;
      case typeOfSignUp.PhoneNumber:
        updatedValidationError.phoneNumber = '';
        setTiPhoneNumber(text);
        break;
      case typeOfSignUp.Password:
        updatedValidationError.password = '';
        setTiPassword(text);
        break;
      case typeOfSignUp.ConfirmPassword:
        updatedValidationError.confirmPassword = '';
        setTiConfirmPassword(text);
        break;
    }

    setValidationError(updatedValidationError);
  };

  const getInputValue = (index: number) => {
    switch (index) {
      case typeOfSignUp.FullName:
        return tiFullName;
      case typeOfSignUp.Email:
        return tiEmail;
      case typeOfSignUp.PhoneNumber:
        return tiPhoneNumber;
      case typeOfSignUp.Password:
        return tiPassword;
      case typeOfSignUp.ConfirmPassword:
        return tiConfirmPassword;
      default:
        return '';
    }
  };

  const handleClickOnRightIcon = (index: number) => {
    if (index === typeOfSignUp.Password || index === typeOfSignUp.ConfirmPassword) {
      const prevInputList = JSON.parse(JSON.stringify(inputList));
      prevInputList[index].SecureTextEntry = !prevInputList[index].SecureTextEntry;
      prevInputList[index].RightIcon = prevInputList[index].SecureTextEntry ? Images.icons.closeEye : Images.icons.openEye;
      setInputList(prevInputList);
    }
  };

  const handleSubmitEditing = (index: number) => {
    if (index < inputList.length - 1) {
      inputRef?.current?.[index + 1]?.focus?.();
    } else {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    try {
      await signUpValidation.validate(
        { fullName: tiFullName, email: tiEmail, phoneNumber: tiPhoneNumber, password: tiPassword, confirmPassword: tiConfirmPassword },
        { abortEarly: false },
      );

      const userDetail = {
        fullName: tiFullName,
        email: tiEmail,
        phoneNumber: tiPhoneNumber,
      };
      storeUserDetailInLocalStorage(userDetail);
    } catch (error: unknown) {
      const yupValidationErrors: Record<string, string> = {};
      if (error instanceof ValidationError) {
        error.inner.forEach((err: ValidationError) => {
          if (err.path && !yupValidationErrors[err.path]) {
            yupValidationErrors[err.path] = err.message;
          }
        });
      }
      setValidationError(yupValidationErrors);
    }
  };

  const storeUserDetailInLocalStorage = (userDetail) => {
    // Save data in local storage
    localStronage.setItem('user', JSON.stringify(userDetail));

    //access value from local storage
    localStronage
      .getItem('user')
      .then((res) => {
        const { email } = JSON.parse(res);
        Alert.alert(email);
        updateLoader(false);
      })
      .catch((e) => {
        Alert.alert(e);
        updateLoader(false);
      });
  };

  const onChangeCountryCode = (_index: number, countryCallingCode: string) => {
    setCountryCode(countryCallingCode);
  };

  return (
    <GradientBackground>
      <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
      <MenuBar onLeftClickListener={handleOnLeftClick} leftIcon={Images.icons.back} title={t('signUp')} />
         <View style={[Layout.fill, styles.container]}>
              {InputConfig.SignUpInput.map((item, index) => {
                return (
                  <TextInputField
                    key={`SignUp-${index}`}
                    label={item?.Label}
                    value={getInputValue(index)}
                    onChangeText={(text: string) => handleChangeText(text, index)}
                    placeholder={item?.PlaceHolder}
                    keyboardType={item?.KeyboardType}
                    returnKeyType={item?.ReturnKeyType}
                    rightIcon={item?.RightIcon}
                    autoCapitalize={item?.AutoCapitalize}
                    secureTextEntry={item?.SecureTextEntry}
                    maxLength={item?.MaxLength}
                    handleRightIconClick={() => handleClickOnRightIcon(index)}
                    validationError={validationError[item?.ErrorKey]}
                    defaultCountry={item?.DefaultCountry}
                    textInputContainerStyle={styles.textInputContainer}
                    reference={(ref) => (inputRef.current[index] = ref)}
                    onSubmitEditing={() => handleSubmitEditing(index)}
                    onChangeCountryCode={(countryCallingCode: string) => onChangeCountryCode(index, countryCallingCode)}
                  />
                );
              })}
            <Button name={t('signUp')} handleClick={handleSignUp} containerStyle={[styles.signUpButton,{backgroundColor: colorThemeVariable.background}]} isLoading={isLoading} />
        </View>
      </KeyboardAwareScrollView>
    </GradientBackground>
  );
};

export default SignUpScreen;
