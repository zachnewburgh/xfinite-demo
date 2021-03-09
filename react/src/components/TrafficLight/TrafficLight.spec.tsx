import { render } from '@testing-library/react';
import React from 'react';
import { LightColor } from '../../constants';
import TrafficLight, { Props } from './TrafficLight';

describe('TrafficLight', () => {
  let props: Props;
  beforeEach(() => {
    props = {
      active: LightColor.Green,
      lights: [LightColor.Red, LightColor.Yellow, LightColor.Green],
    };
  });

  it('should render successfully', () => {
    const { baseElement } = render(<TrafficLight {...props} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render the lights', () => {
    const { baseElement } = render(<TrafficLight {...props} />);
    const hasLights = props.lights.every((light: string) =>
      baseElement.querySelector(`[style="background-color: ${light};"]`),
    );
    expect(hasLights).toBeTruthy();
  });
});
