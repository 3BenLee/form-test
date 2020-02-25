import React from 'react';
import styles from './styles.module.css';

export const Input = ({ input, meta, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input className={styles[meta.error && meta.touched ? 'error' : 'textInput']} {...input} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

export default Input;
