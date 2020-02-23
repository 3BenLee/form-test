import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button name={props.name} type='text' onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}
