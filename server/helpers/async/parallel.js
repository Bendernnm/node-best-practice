/* eslint-disable */
module.exports = (args) => {
  if (typeof args !== 'object') {
    throw new Error('Incorrect param');
  }

  if (args instanceof Array) {
    return Promise.all(args);
  }

  // {first: promise, second: promise}
  const fields = [];
  const promises = [];

  for (const field in args) {
    if (!args.hasOwnProperty(field)) {
      continue;
    }

    const promise = args[field];

    fields.push(field);
    promises.push(promise);
  }

  return Promise.all(promises).then((results) => {
    const promiseResult = {};

    results.forEach((result, index) => {
      const field = fields[index];

      promiseResult[field] = result;
    });

    return promiseResult;
  });
};
