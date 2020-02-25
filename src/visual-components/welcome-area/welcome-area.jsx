import React from 'react';
import { GiantRobot } from '../icons/giant-robot';
import styles from './styles.module.css';

export const WelcomeArea = props => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GiantRobot />
        </div>
        <div className={styles.welcome}>Welcome</div>
        <div>Please tell us a bit about yourself</div>
      </div>
    </div>
  );
};
