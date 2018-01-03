import React from 'react';

const Input = props => (
  <div className={`input-field ${props.col}`}>
    <input type={props.inputType} id={props.inputId} className="validate" onChange={props.onChange} />
    <label htmlFor={props.inputId}>{props.label}</label>
  </div>
);
export default Input;
