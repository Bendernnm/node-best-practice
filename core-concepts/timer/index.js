module.exports.sync = (duration) => {
  const startAt = Date.now();

  while (Date.now() - startAt < duration) ;
};

module.exports.async = (duration) => new Promise((resolve) => {
  setTimeout(() => resolve(1), duration);
});
