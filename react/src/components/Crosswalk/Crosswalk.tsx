import React from 'react';
import styles from './Crosswalk.module.scss';

interface Props {
  label: string;
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
