const _ = require('lodash');
const axios = require('axios');

module.exports = async (opts) => {
  const response = await axios.request(opts);

  return _.pick(response, 'data', 'status', 'statusText', 'headers');
};
