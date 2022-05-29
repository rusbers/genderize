import React from 'react';

function showMessage(isError, errorMessage, succesMessageParts) {
  const isSucces = !isError && succesMessageParts;

  const renderSuccesMessage = (succesMessageParts) => {
    const [ name, gender ] = succesMessageParts;

    return `${name} is ${gender}`
  };

  return (isSucces) ? <p>{renderSuccesMessage(succesMessageParts)}</p> :
                      <p>{String(errorMessage)}</p>
}

function Output(props) {
  const { isError, errorMessage, succesMessageParts } = props.genderResult;

  return (
    <>
      {showMessage(isError, errorMessage, succesMessageParts)}
    </>
  );
}

export { Output };