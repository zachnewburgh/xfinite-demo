import { render, screen } from '@testing-library/react';
import React from 'react';
import { Crosswalk } from '../../constants';
import Component, { Props } from './Crosswalk';

describe('Crosswalk', () => {
  let props: Props;
  beforeEach(() => {
    props = {
      label: Crosswalk.Stop,
    };
  });
  it('should render successfully', () => {
    const { baseElement } = render(<Component {...props} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the label', () => {
    render(<Component {...props} />);
    expect(screen.getByText(Crosswalk.Stop)).toBeTruthy();
  });
});
