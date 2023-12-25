import 'react-native-gesture-handler';
import React from 'react';

import ApplicationNavigator from './navigators/Application';
import './translations';
import GlobalStateProvider from './store/GlobalStateProvider';

const App = () => (
  <GlobalStateProvider>
        <ApplicationNavigator />
  </GlobalStateProvider>
);

export default App;
