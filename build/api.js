const API = {
    GENDERIZE: 'https://api.genderize.io',
};
function generateServerUrl(name) {
    return `${API.GENDERIZE}?name=${name}`;
}
export { generateServerUrl };
