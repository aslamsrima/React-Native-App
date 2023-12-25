import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';

import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';

import AuthNavigator from './AuthNavigator';
import { Routes } from './routes';
import { ApplicationStackParamList } from '../../@types/navigation';
import { useTheme } from '../hooks';
import { Colors } from '../theme/index';
import { Startup } from '../screens';

const Stack = createStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={Layout.fill} forceInset={Layout.safeareaViewInsent}>
        <StatusBar hidden={false} translucent={false} barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.Startup} component={Startup} />
            <Stack.Screen name={Routes.Auth} component={AuthNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
