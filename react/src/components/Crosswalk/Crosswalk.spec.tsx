import { render, screen } from '@testing-library/react';
import React from 'react';
import Crosswalk from './Crosswalk';

describe('Crosswalk', () => {
  let props;
  beforeEach(() => {
    props = {
      label: 'foo',
    };
  });
  it('should render successfully', () => {
    const { baseElement } = render(<Crosswalk {...props} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the label', () => {
    render(<Crosswalk {...props} />);
    expect(screen.getByText('foo')).toBeTruthy();
  });
});
