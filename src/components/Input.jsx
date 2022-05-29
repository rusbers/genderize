import React from 'react';

function Input( props ) {
  const { label, type, placeholder } = props.inputProps;

  return (
    <label>
      { label }
      <input type={ type } placeholder={ placeholder } value={props.value} onChange={props.onChange}/>
    </label>
  )
}

export { Input };