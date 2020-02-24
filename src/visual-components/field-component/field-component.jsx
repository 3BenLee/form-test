import React from 'react';
import { Field } from 'redux-form';

export const FieldComponent = props => {
  return (
    <Field
      name={props.name}
      component={({ input, meta, label }) => {
        return (
          <div>
            <label>{label}</label>
            <input {...input} type='text' />
            {meta.touched && meta.error && <span className='error'>{meta.error}</span>}
          </div>
        );
      }}
    />
  );
};

export default FieldComponent;
