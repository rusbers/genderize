import { UI_ELEMENTS } from './view';
import { generateServerUrl } from './api';
import { getInputValue, isStatusOK } from './helpers';
import { errorMessage, throwError, showMessage } from './message';
UI_ELEMENTS.FORM.addEventListener('submit', renderGender);
async function getGender() {
    const name = getInputValue();
    const fetchUrl = generateServerUrl(name);
    const fetchGender = await fetch(fetchUrl);
    return isStatusOK(fetchGender) ? fetchGender : throwError(errorMessage.server());
}
async function renderGender() {
    try {
        const fetchGender = await getGender();
        const fetchResult = await fetchGender.json();
        const resultingGender = fetchResult.gender;
        const enteredName = fetchResult.name;
        if (!resultingGender)
            throwError(errorMessage.name(enteredName));
        showMessage(false, null, [enteredName, resultingGender]);
    }
    catch (catchedError) {
        showMessage(true, catchedError);
        return;
    }
    finally {
        this.reset();
    }
}
