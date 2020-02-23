import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FormComponent } from '../../visual-components/form-component/form-component';
import styles from './styles.module.css';

const INITIAL_VALUES = {
  'First Name': '',
  'Last Name': '',
  'Address One': '',
  'Address Two': ''
};

class StepOne extends Component {
  render() {
    const { handleSubmit } = this.props;

    const submitForm = formValues => {
      console.log('submitting Form: ', formValues);
    };

    const formInputs = Object.keys(INITIAL_VALUES).map((val, index) => {
      return <FormComponent key={index} name={val} onSubmit={submitForm} handleSubmit={handleSubmit} />;
    });

    return (
      <div className={styles.container}>
        {formInputs}
        <button type='submit'>Submit</button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'step-one',
  INITIAL_VALUES
})(StepOne);
