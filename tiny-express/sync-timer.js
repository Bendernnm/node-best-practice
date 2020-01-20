module.exports = (duration) => {
  const startAt = Date.now();

  while (Date.now() - startAt < duration) ;
};
