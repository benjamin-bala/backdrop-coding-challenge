import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('Root', () => {
  test('If it renders Root element', () => {
    const app = render(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
