import * as yup from 'yup';

const emailValidationSchema = yup
  .string()
  .required('email.require')
  .email('email.enterValidEmail')
  .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email.enterValidEmail');

const passwordValidationSchema = (password: string) =>
  yup
    .string()
    .required(`${password}.require`)
    .matches(/^(?=.*[a-z])/, `${password}.mustIncludeLowerCase`)
    .matches(/^(?=.*[A-Z])/, `${password}.mustIncludeUpperCase`)
    .matches(/^(?=.*[0-9])/, `${password}.mustIncludeDigit`)
    .matches(/^(?=.*[!@#\$%\^&\*])/, `${password}.mustIncludeSpecialCharacter`)
    .matches(/^(?!.*(.)\1\1)/, `${password}.notContainTwoConsecutiveCharacter`)
    .min(8, `${password}.passwordLengthAtLeast`)
    .max(15, `${password}.passwordLengthMaximum`);

export const signUpValidation = yup.object({
  fullName: yup
    .string()
    .required('fullName.require')
    .min(2, 'fullName.minCharacterRequire')
    .max(50, 'fullName.maxCharacterRequire')
    .matches(/^[a-zA-Z\s]+$/, 'fullName.onlyContainLettersSpace'),
  email: emailValidationSchema,
  phoneNumber: yup
    .string()
    .required('phoneNumber.require')
    .matches(/^\d+$/, 'phoneNumber.onlyDigits')
    .min(7, 'phoneNumber.minDigitRequire')
    .max(15, 'phoneNumber.maxDigitRequire'),
  password: passwordValidationSchema('password'),
  confirmPassword: yup
    .string()
    .required('confirmPassword.require')
    .oneOf([yup.ref('password'), null], 'confirmPassword.mustMatch'),
});
