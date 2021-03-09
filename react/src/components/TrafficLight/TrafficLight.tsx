import classnames from 'classnames';
import React from 'react';
import { LightColor } from '../../constants';
import styles from './TrafficLight.module.scss';

export interface Props {
  active: LightColor;
  lights: LightColor[];
}

export default ({ active, lights }: Props) => {
  const lightsEl = lights.map((light: LightColor) => {
    const className = classnames(styles.light, {
      [styles.active]: active === light,
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
    <section className={styles.trafficLight}>
      <div className={styles.lightsContainer}>{lightsEl}</div>
    </section>
  );
};
