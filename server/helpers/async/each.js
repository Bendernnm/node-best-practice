module.exports = (docs, asyncFunction) => Promise.all(docs.map(asyncFunction));
