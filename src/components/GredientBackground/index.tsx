import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from '../../hooks';

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  const { Layout, Colors,darkMode: isDark  } = useTheme();

  return (
    <LinearGradient colors={isDark ? ['green', 'lightblue'] : ['purple','pink']} useAngle={true} angle={180} locations={[0, 0.65]} style={Layout.fill}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
