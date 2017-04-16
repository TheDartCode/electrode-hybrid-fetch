const {fetch} = require('fetch-ponyfill')();

export default (url) => {
  let statusCode;
  return fetch(url)
    .then((response) => {
      statusCode = response.status;
      return response.json();
    })
    .then((json) => {
      return {
        statusCode,
        json
      };
    });
};
