import { UI_ELEMENTS } from './view';
import { generateServerUrl } from './api';
import { errorNameMessage, errorServerMessage, getInputValue, isStatusOK, showErrorMessage } from './helpers';

UI_ELEMENTS.FORM.addEventListener('submit', getGender);

async function getGender(this: any): Promise<void> {
  const name: string = getInputValue();
  const fetchUrl: string = generateServerUrl(name);
  const outputMessage = (name: string, gender: string): string => {
    return `${name} is ${gender}`;
  }

  try {
    const fetchGender = await fetch(fetchUrl);

    if(!isStatusOK(fetchGender)) throw new Error(errorServerMessage());

    const fetchResult = await fetchGender.json();

    if (!fetchResult.gender) throw new Error(errorNameMessage(fetchResult.name));

    UI_ELEMENTS.OUTPUT.textContent = outputMessage(fetchResult.name, fetchResult.gender);
  } catch(error: any) {
    showErrorMessage(UI_ELEMENTS.OUTPUT, error, 'error');
    return;
  } finally {
    this.reset();
  }
}