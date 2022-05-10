import { UI_ELEMENTS } from './view';
function errorNameMessage(name) {
    return `The name ${name} is not valid, please try another name!`;
}
function errorServerMessage() {
    return `Sorry, it seems that the name entered by you is not valid for the server. Please try again!`;
}
function getInputValue() {
    return UI_ELEMENTS.INPUT.value;
}
function isStatusOK(request) {
    return (request.status >= 200 && request.status <= 299);
}
function showErrorMessage(DOMElement, errorMessage, className, timeOut = 2000) {
    DOMElement.textContent = errorMessage;
    DOMElement.classList.add(className);
    setTimeout(() => DOMElement.classList.remove(className), timeOut);
}
export { errorNameMessage, errorServerMessage, getInputValue, isStatusOK, showErrorMessage };
