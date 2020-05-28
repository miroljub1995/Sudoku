import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('Display Hello Sudoku', () => {
  render(<App />)

  expect(screen.getByText(/Hello Sudoku/)).toBeInTheDocument();
});
