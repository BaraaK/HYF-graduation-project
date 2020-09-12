const axios = require('axios');

const HttpError = require('../models/http-error');

async function getCoordsForAddress() {
  return {
    lat: 52.3545828,
    lng: 4.7638777
  };
}

module.exports = getCoordsForAddress;
