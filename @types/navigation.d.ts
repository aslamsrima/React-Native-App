import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Routes } from '../src/navigators/routes';

export type AuthParamsList = {
  [Routes.Example]: undefined;
  [Routes.SignUpScreen]: undefined;
};

export type SignUpScreenProps = StackScreenProps<AuthParamsList, Routes.SignUpScreen>;
export type ExampleScreenProps = StackScreenProps<AuthParamsList, Routes.Example>;


export type ApplicationStackParamList = {
  [Routes.Startup]: undefined;
  [Routes.Auth]: NavigatorScreenParams<AuthParamsList>;
};

export type ApplicationScreenProps = StackScreenProps<ApplicationStackParamList>;

export type StartupScreenProps = StackScreenProps<ApplicationStackParamList, Routes.Startup>;