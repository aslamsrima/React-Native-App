import React from 'react';

import { LoaderProvider } from './context/loader';
import { ThemeProvider } from './context/theme';

const GlobalStateProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <LoaderProvider>{children}</LoaderProvider>
    </ThemeProvider>
  );
};

export default GlobalStateProvider;
