import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../../visual-components/button/button';
import styles from './styles.module.css';
import { renderInput } from '../../helpers/renderInput';
import { validate } from '../../helpers/validate';

let AddressForm = ({ handleSubmit, submitting }) => {
  const submitForm = formValues => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submitForm)}>
        <Field component={renderInput} label='First Name' name='firstName' />
        <Field component={renderInput} label='Last Name' name='lastName' />
        <Field component={renderInput} label='Address One' name='addressOne' />
        <Field component={renderInput} label='Address Two' name='addressTwo' />
        <Button type='submit' text='Submit' />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'addressForm',
  validate
})(AddressForm);
