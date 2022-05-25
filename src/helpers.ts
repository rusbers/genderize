import { UI_ELEMENTS } from './view';

function getInputValue(): string {
  return UI_ELEMENTS.INPUT.value;
}

function isStatusOK(request: any): boolean {
  return (request.status >= 200 && request.status <= 299);
}

export { getInputValue, isStatusOK };