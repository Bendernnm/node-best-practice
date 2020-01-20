module.exports = (req, res, next) => {
  const browser = req.headers['user-agent'];

  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization, Content-Disposition, Refresh-Token, Authorization-Token, Device-Id');

  if (/Trident/.test(browser)) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).send({});
  }

  next();
};
