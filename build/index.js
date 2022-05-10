var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UI_ELEMENTS } from './view';
import { generateServerUrl } from './api';
import { errorNameMessage, errorServerMessage, getInputValue, isStatusOK, showErrorMessage } from './helpers';
UI_ELEMENTS.FORM.addEventListener('submit', getGender);
function getGender() {
    return __awaiter(this, void 0, void 0, function* () {
        const name = getInputValue();
        const fetchUrl = generateServerUrl(name);
        const outputMessage = (name, gender) => {
            return `${name} is ${gender}`;
        };
        try {
            const fetchGender = yield fetch(fetchUrl);
            if (!isStatusOK(fetchGender))
                throw new Error(errorServerMessage());
            const fetchResult = yield fetchGender.json();
            if (!fetchResult.gender)
                throw new Error(errorNameMessage(fetchResult.name));
            UI_ELEMENTS.OUTPUT.textContent = outputMessage(fetchResult.name, fetchResult.gender);
        }
        catch (error) {
            showErrorMessage(UI_ELEMENTS.OUTPUT, error, 'error');
            return;
        }
        finally {
            this.reset();
        }
    });
}
