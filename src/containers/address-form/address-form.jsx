import React from 'react';
import { reduxForm } from 'redux-form';

import { Button } from '../../visual-components/button/button';
import { TextField } from '../../visual-components/text-field/text-field';

// import { Input } from '../../visual-components/input/input';
import { WelcomeArea } from '../../visual-components/welcome-area/welcome-area';
import { validate } from '../../helpers/validate';

import styles from './styles.module.css';

const fieldData = [
  { label: 'First Name', name: 'firstName' },
  { label: 'Last Name', name: 'lastName' },
  { label: 'Address One', name: 'addressOne' },
  { label: 'AddressTwo', name: 'addressTwo' }
];

const AddressForm = ({ handleSubmit, submitting }) => {
  const submitForm = formValues => {
    console.log('submitting Form: ', formValues);
  };

  const fields = fieldData.map((item, index) => {
    return <TextField key={index} label={item.label} name={item.name} />;
  });

  return (
    <div className={styles.container}>
      <WelcomeArea />
      <form className={styles.formWrapper} onSubmit={handleSubmit(submitForm)}>
        {fields}
        <Button type='submit' text='Submit' />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'addressForm',
  validate
})(AddressForm);
