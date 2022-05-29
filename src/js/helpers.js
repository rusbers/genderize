function isStatusOK(request) {
  return (request.status >= 200 && request.status <= 299);
}

function throwError(errorMessage) {
  throw new Error(errorMessage);
}

export { isStatusOK, throwError };