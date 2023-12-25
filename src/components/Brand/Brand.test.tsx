import { render, screen } from '@testing-library/react-native';
import React from 'react';

import Brand from './Brand';

test('render correctly', () => {
  const component = (
      <Brand />
  );

  render(component);

  const wrapper = screen.getByTestId('brand-img-wrapper');
  const img = screen.getByTestId('brand-img');

  expect(wrapper.props.style.height).toBe(200);
  expect(wrapper.props.style.width).toBe(200);
  expect(img.props.resizeMode).toBe('contain');
});
