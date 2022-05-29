import { errorMessage } from "./message";
import { isStatusOK } from "./helpers";
import { throwError } from "./helpers";
const API = {
  GENDERIZE: 'https://api.genderize.io',
}

function generateServerUrl(name) {
  return `${API.GENDERIZE}?name=${name}`;
}

const getGender = async (name) => {
  const fetchUrl = generateServerUrl(name);
  const fetchGender = await fetch(fetchUrl);

  return isStatusOK(fetchGender) ? fetchGender : throwError(errorMessage.server());
}

export { generateServerUrl, getGender };