import classnames from 'classnames';
import React from 'react';
import { LightColor } from '../../constants';
import './TrafficLight.css';

export interface Props {
  active: LightColor;
  lights: LightColor[];
}

export default ({ active, lights }: Props) => {
  const lightsEl = lights.map((light: LightColor) => {
    const className = classnames('light', {
      active: active === light,
    });
    return (
      <div
        key={light}
        className={className}
        style={{ backgroundColor: light }}
      />
    );
  });

  return (
    <section className='trafficLight'>
      <div className='lightsContainer'>{lightsEl}</div>
    </section>
  );
};
