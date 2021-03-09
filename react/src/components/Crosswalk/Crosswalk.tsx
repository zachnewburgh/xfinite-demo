import React from 'react';
import { Crosswalk } from '../../constants';
import styles from './Crosswalk.module.scss';

export interface Props {
  label: Crosswalk;
}

export default ({ label }: Props) => (
  <section className={styles.crosswalkContainer}>
    <div className={styles.crosswalk}>
      <div className={styles.crosswalkSign}>{label}</div>
    </div>
    <div className={styles.poleContainer}>
      <div className={styles.pole} />
    </div>
  </section>
);
