const errorMessage = {
  name(name) {
    return `The name ${name} is not valid, please try another name!`;
  },

  server() {
    return `Sorry, it seems that the name entered by you is not valid for the server. Please try again!`;
  }
}

export { errorMessage }