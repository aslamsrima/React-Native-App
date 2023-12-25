import 'react-native';
import { render } from '@testing-library/react-native';
import React from 'react';

import App from './App';

it('App renders correctly', () => {
  const component = (

      <App />
  );

  render(component);

  expect(component).toBeDefined();
});
