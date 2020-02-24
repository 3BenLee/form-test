import React from 'react';

export const renderInput = ({ input, meta, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};
