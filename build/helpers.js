import { UI_ELEMENTS } from './view';
function getInputValue() {
    return UI_ELEMENTS.INPUT.value;
}
function isStatusOK(request) {
    return (request.status >= 200 && request.status <= 299);
}
export { getInputValue, isStatusOK };
