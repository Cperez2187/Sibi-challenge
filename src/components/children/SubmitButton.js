import React from 'react';

const SubmitButton = props => (
  <button
    style={{ backgroundColor: '#09B2ED' }}
    className="btn waves-effect waves-light"
    type="submit"
    name="action"
  >
    Submit
    <i className="material-icons right">send</i>
  </button>
);

export default SubmitButton;
