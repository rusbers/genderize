import { UI_ELEMENTS } from "./view";

const errorMessage = {
  name(name: string): string {
    return `The name ${name} is not valid, please try another name!`;
  },

  server() {
    return `Sorry, it seems that the name entered by you is not valid for the server. Please try again!`;
  }
}

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

function showMessage(isErrorMessage: boolean, errorMessage?: string | null, succesMessageParts?: [string, string] | null):void {
  const HTML_ELEMENT = UI_ELEMENTS.OUTPUT;
  const hasError = isErrorMessage && errorMessage;
  const isSucces = !isErrorMessage && succesMessageParts;

  if (hasError) {
    HTML_ELEMENT.textContent = errorMessage;
  } else if (isSucces) {
    const [name, gender] = succesMessageParts;
    HTML_ELEMENT.textContent = `${name} is ${gender}`;
  }
}

export { errorMessage, showMessage, throwError }