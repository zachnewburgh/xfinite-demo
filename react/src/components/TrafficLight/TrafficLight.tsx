import classnames from 'classnames';
import React from 'react';
import styles from './TrafficLight.module.scss';

interface Props {
  active: string;
  lights: string[];
}

export default ({ active, lights }: Props) => {
  const lightsEl = lights.map((id: string) => {
    const className = classnames(styles.light, {
      [styles.active]: active === id,
    });
    return (
      <div key={id} className={className} style={{ backgroundColor: id }} />
    );
  });

  return (
    <section className={styles.trafficLight}>
      <div className={styles.lightsContainer}>{lightsEl}</div>
    </section>
  );
};
