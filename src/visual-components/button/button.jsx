import React from 'react';
import styles from './styles.module.css';

export const Button = props => {
  return (
    <div className={styles.container}>
      <button className={styles.submitButton} name={props.name} type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
