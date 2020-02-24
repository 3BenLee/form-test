import React from 'react';

export const Button = props => {
  return (
    <div>
      <button name={props.name} type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
