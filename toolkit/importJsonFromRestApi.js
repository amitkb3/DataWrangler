const axios = require('axios');

function importJsonFromRestApi (url) {
  return axios.get(url)
    .then(response => {
      return JSON.parse(response);
    });
  };

  module.exports = importJsonFromRestApi;