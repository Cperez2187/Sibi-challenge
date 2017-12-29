import React from "react";

const Input = props => {
  return (
    <div className="input-field col s12 m6">
      <input type={props.inputType} id={props.inputId} className="validate" />
      <label htmlFor={props.inputId}>{props.label}</label>
    </div>
  );
};

export default Input;
