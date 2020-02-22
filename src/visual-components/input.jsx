import React from 'react';

export default function Input(props) {
  return (
    <div>
      <input name={props.name} type='text' onChange={props.onChange} />
    </div>
  );
}
