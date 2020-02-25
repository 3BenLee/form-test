import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../../visual-components/input/input';
import styles from './styles.module.css';

export const TextField = props => {
  return (
    <>
      <h3 className={styles.label}>{props.label}</h3>
      <Field component={Input} name={props.name} />
    </>
  );
};
