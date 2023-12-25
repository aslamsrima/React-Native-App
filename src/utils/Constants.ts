import { CountryCode } from 'react-native-country-picker-modal';

import { typeOfKeyboardEvent } from './Enum';
import { StyleConfig } from '../theme';

export const DefaultCountry: { countryCode: CountryCode; callingCode: string } = { countryCode: 'US', callingCode: '+1' };

export const specialCharacters = {
  space: ' ',
  plus: '+',
  colon: ':',
  comma: ',',
  doubleSpace: '  ',
  quadStar: '****',
  dollar: '$',
  dash: '-',
};

export const momentFormats = {
  weekDateAtTimeFormat: 'ddd, DD MMM [at] h:mm A',
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm',
  hourMinuteFormat: 'hh:mm',
  hourFormat: 'h',
  longMonthNameFormat: 'MMMM',
  shortMonthNameFormat: 'MMM',
  weekDayNameFormat: 'dddd',
  minuteFormat: 'mm',
  dayDateFormat: 'DD',
  periodFormat: 'A',
};

export const regex = {
  removeWhiteSpaces: /\s?/g,
  removeNonIntegersExceptSpace: /[^0-9\s]/g,
  addSpaceAfterFourCharacter: /(\d{4})/g,
  cardExpiryDateFormat: /^(\d{2})(\d{1})/,
  addDollarPrefix: /^(?=.*\d)(?!\$)/,
};

export const keyboardHide = StyleConfig.isAndroid ? typeOfKeyboardEvent.didHide : typeOfKeyboardEvent.willHide;

export const apiEndPoints = {
  customer: '/customer',
};

export const httpMethods = {
  post: 'post' as 'post',
  get: 'get' as 'get',
  put: 'put' as 'put',
  ['delete']: 'delete' as 'delete',
};

export const HardwareBackPress = 'hardwareBackPress';
