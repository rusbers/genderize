import React, { useState } from "react";
import { Form } from "./Form";
import { Output } from "./Output";

function App() {
  const [genderResult, setGenderResult] = useState(
    {
      isErrorMessage: false,
      errorMessage: '',
      succesMessageParts: null,
    }
  );

  return (
    <>
      <Form setGenderResult={setGenderResult} />
      <Output genderResult={genderResult} setGenderResult={setGenderResult} />
    </>
  )
}

export { App };