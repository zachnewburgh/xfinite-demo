import React, { useEffect, useState } from 'react';
import { IState } from 'xfinite';
import { crosswalk, trafficLight } from '../../constants';
import { Crosswalk } from '../Crosswalk';
import { TrafficLight } from '../TrafficLight';
import styles from './Intersection.module.scss';

export default () => {
  const [light, setLight] = useState(trafficLight.active);
  const lights = trafficLight.states.map(({ id }: IState) => id);

  const handleTrafficLightChange = (_: string, current: string) => {
    crosswalk.next(current);
  };
  trafficLight.onStateChange = handleTrafficLightChange;

  useEffect(() => {
    const interval = setInterval(() => {
      const { active } = trafficLight.next(null);
      setLight(active);
    }, 2000);
    return () => clearInterval(interval);
  }, [trafficLight]);

  return (
    <div className={styles.intersection}>
      <section className={styles.container}>
        <TrafficLight active={light} lights={lights} />
      </section>
      <section className={styles.container}>
        <Crosswalk label={crosswalk.active} />
      </section>
    </div>
  );
};
