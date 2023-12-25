import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { ApplicationScreenProps } from '../../../@types/navigation';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import { Routes } from '../../navigators/routes';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters } = useTheme();

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    navigation.navigate(Routes.Auth);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  );
};

export default Startup;
