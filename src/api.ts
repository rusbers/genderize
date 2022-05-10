const API = {
  GENDERIZE: 'https://api.genderize.io',
}

function generateServerUrl(name: string): string {
  return `${API.GENDERIZE}?name=${name}`;
}

export { generateServerUrl };