import React from 'react';
import { Field } from 'redux-form';
import { TextInput } from '../text-input/text-input';

export const FormComponent = props => {
  const { handleSubmit, onSubmit } = props;

  return (
    <div>
      <h1>{props.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name={props.name} component={TextInput} />
      </form>
    </div>
  );
};

export default FormComponent;

// #F7F7F7 fill
