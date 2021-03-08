import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    render(<App />);
    const expected = screen.getByText('Hello World');
    expect(expected).toBeTruthy();
  });
});
