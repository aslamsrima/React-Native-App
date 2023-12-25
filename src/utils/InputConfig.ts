import { Images,MaxLength } from '../theme';
import { DefaultCountry } from './Constants';
import { ThemeVariables } from '../../@types/theme';

const themeVariable = {} as ThemeVariables;

export enum KeyboardType {
  default = 'default',
  numeric = 'numeric',
  emailAddress = 'email-address',
  phonePad = 'phone-pad',
}

export enum AutoCapitalize {
  characters = 'characters',
  words = 'words',
  sentences = 'sentences',
  none = 'none',
}

export enum ReturnKeyType {
  next = 'next',
  done = 'done',
}
export const InputConfig = {
  SignUpInput: [
    {
      PlaceHolder: 'signup:fullName',
      Label: 'signup:fullName',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      RightIcon: null,
      ErrorKey: 'fullName',
    },
    {
      PlaceHolder: 'signup:emailAddress',
      Label: 'signup:emailAddress',
      KeyboardType: KeyboardType.emailAddress,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      RightIcon: null,
      ErrorKey: 'email',
    },
    {
      PlaceHolder: 'signup:phoneNumber',
      Label: 'signup:phoneNumber',
      KeyboardType: KeyboardType.phonePad,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      MaxLength: MaxLength.phoneNumber,
      DefaultCountry,
      RightIcon: null,
      ErrorKey: 'phoneNumber',
    },
    {
      PlaceHolder: 'signup:password',
      Label: 'signup:password',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      MaxLength: MaxLength.password,
      RightIcon: Images(themeVariable).icons.closeEye,
      SecureTextEntry: true,
      ErrorKey: 'password',
    },
    {
      PlaceHolder: 'signup:confirmPassword',
      Label: 'signup:confirmPassword',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.done,
      AutoCapitalize: AutoCapitalize.none,
      MaxLength: MaxLength.password,
      RightIcon: Images(themeVariable).icons.closeEye,
      SecureTextEntry: true,
      ErrorKey: 'confirmPassword',
    },
  ],
};
