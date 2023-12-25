import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Routes } from './routes';
import { AuthParamsList } from '../../@types/navigation';
import { SignUpScreen, Example } from '../screens';

const Stack = createStackNavigator<AuthParamsList>();

// @refresh reset
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.Example} component={Example} />
      <Stack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
