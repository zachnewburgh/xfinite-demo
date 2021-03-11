import React, { useEffect, useState } from 'react';
import { IState } from 'xfinite';
import { crosswalk, LightColor, trafficLight } from '../../constants';
import { Crosswalk } from '../Crosswalk';
import { TrafficLight } from '../TrafficLight';
import './Intersection.css';

export default () => {
  const [light, setLight] = useState<LightColor>(trafficLight.active);
  const lights = trafficLight.states.map(({ id }: IState<LightColor>) => id);

  const handleTrafficLightChange = (_: string, current: LightColor) => {
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
    <div className='intersection'>
      <section className='container'>
        <TrafficLight active={light} lights={lights} />
      </section>
      <section className='container'>
        <Crosswalk label={crosswalk.active} />
      </section>
    </div>
  );
};
