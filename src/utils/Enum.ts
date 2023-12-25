import { KeyboardHideEventType } from '../../@types/common';

export const typeOfSignUpEmail = {
  Email: 0,
};

export const typeOfLogin = {
  Email: 0,
  Password: 1,
};

export const typeOfSignUp = {
  FullName: 0,
  Email: 1,
  PhoneNumber: 2,
  Password: 3,
  ConfirmPassword: 4,
};


export const typeOfKeyboardEvent: { willHide: KeyboardHideEventType; didHide: KeyboardHideEventType } = {
  willHide: 'keyboardWillHide',
  didHide: 'keyboardDidHide',
};

// Request headers
export enum Headers {
  Authorization = 'authorization',
  ContentType = 'Content-Type',
}
