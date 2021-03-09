import { render } from '@testing-library/react';
import React from 'react';
import Intersection from './Intersection';

describe('Intersection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Intersection />);
    expect(baseElement).toBeTruthy();
  });
});
