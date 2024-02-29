// import renderer from 'react-test-renderer';
import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import SignupScreen from '../src/container/signup/SignupScreen';
jest.useFakeTimers();
describe('Signup page form', () => {
  it('should be render success', () => {
    const { getByLabelText, getByRole } = render(<SignupScreen />);
    fireEvent.changeText(getByLabelText('firstname'), 'jocel');
    fireEvent.changeText(getByLabelText('name'), 'nardi');
    fireEvent.press(getByRole('button', { name: 'Soumettre' }));
  });
});
