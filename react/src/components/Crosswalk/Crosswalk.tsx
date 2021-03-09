import React from 'react';
import styles from './Crosswalk.module.scss';

interface Props {
  active: string;
}

export default ({ active }: Props) => (
  <section className={styles.crosswalkContainer}>
    <div className={styles.crosswalk}>
      <div className={styles.crosswalkSign}>{active}</div>
    </div>
    <div className={styles.poleContainer}>
      <div className={styles.pole} />
    </div>
  </section>
);
