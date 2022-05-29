import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { getGender } from '../js/network';
import { throwError } from '../js/helpers';
import { errorMessage } from '../js/message';

const inputArguments = {
  label: 'your name',
  type: 'text',
  placeholder: 'name...'
}

function Form(props) {
  const [name, setName] = useState('');

  const handlerName = (onChangeEvent) => setName(onChangeEvent.target.value);
  const resetInputField = () => setName('');

  const getGenderResult = async (event) => {
    event.preventDefault();

    try {
      const fetchGender = await getGender(name);
      const fetchResult = await fetchGender.json();
      const resultingGender = fetchResult.gender;

      if (!resultingGender) throwError(errorMessage.name(name));

      props.setGenderResult({
        isErrorMessage: false,
        errorMessage: null,
        succesMessageParts: [name, resultingGender],
      });
    } catch (catchedError) {
      props.setGenderResult({
        isErrorMessage: true,
        errorMessage: catchedError,
        succesMessageParts: null,
      });
    }

    resetInputField();
  }

  return (
    <form onSubmit={getGenderResult}>
      <Input inputProps={inputArguments} value={name} onChange={handlerName} />
      <Button buttonType='submit' buttonText='Submit' />
    </form>
  )
}

export { Form };