import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloThere from '../src/Components/HelloThere';

test('contains all ingredients', () => {
  render(<HelloThere />);

  expect(screen.getByText('Hello There')).toBeInTheDocument();
});