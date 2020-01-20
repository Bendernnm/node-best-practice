/* eslint-disable */
module.exports.opts = ({ page = 1, limit = 50 } = {}, maxLimit = 50) => {
  page = parseInt(page, 10);
  limit = parseInt(limit, 10);

  (!page || page < 1) && (page = 1);
  (!limit || limit > maxLimit || limit < 1) && (limit = maxLimit);

  return { page, limit };
};

module.exports.pages = (limit, total = 0) => Math.ceil(total / limit);

module.exports.skip = (page, limit) => (page - 1) * limit;
