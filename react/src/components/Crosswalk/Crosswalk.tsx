import React from 'react';
import { Crosswalk } from '../../constants';
import './Crosswalk.css';

export interface Props {
  label: Crosswalk;
}

export default ({ label }: Props) => (
  <section className='crosswalkContainer'>
    <div className='crosswalk'>
      <div className='crosswalkSign'>{label}</div>
    </div>
    <div className='poleContainer'>
      <div className='pole' />
    </div>
  </section>
);
