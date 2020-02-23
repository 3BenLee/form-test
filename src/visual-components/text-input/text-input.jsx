import React from 'react';
import styles from './styles.module.css';

export const TextInput = props => {
  const { input } = props;

  return (
    <div className={styles.container}>
      <input className={styles.textInput} {...input} type='text' />
    </div>
  );
};
export default TextInput;
