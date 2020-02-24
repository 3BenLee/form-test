import React from 'react';
import styles from './styles.module.css';

export const TextInput = props => {
  const { input } = props;

  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <input className={styles.textInput} {...input} type='text' />
    </div>
  );
};
export default TextInput;
