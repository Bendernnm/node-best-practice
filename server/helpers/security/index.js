const uuid = require('uuid');
const moment = require('moment');
const bcrypt = require('bcrypt');
const Cryptr = require('cryptr');
const jwt = require('jwt-simple');

const CODER_SECRET_KEY = 'qwerty';
const JWT_TOKEN_SECRET = 'qwerty';


const cryptr = new Cryptr(CODER_SECRET_KEY);

module.exports.cryptEncrypt = (str) => cryptr.encrypt(str);

module.exports.cryptDecrypt = (str) => cryptr.decrypt(str);

module.exports.cryptEncryptSeveral = (...args) => args.map((str) => cryptr.encrypt(str));

module.exports.cryptDecryptSeveral = (...args) => args.map((str) => cryptr.decrypt(str));

module.exports.generateSimpleToken = () => cryptr.encrypt(uuid.v4());

// async function, create hash for password
module.exports.hash = (password) => bcrypt.hash(password, 4);

// async function, check password
module.exports.compare = (password, hash) => bcrypt.compare(password, hash);

// {_id: <userId>}
module.exports.encodeJWT = (payload = {}, duration = 60 * 15) => {
  let vPayload = payload;

  if (!vPayload) {
    vPayload = {};
  }

  vPayload.exp = moment().add(duration, 'seconds').format('X');

  return cryptr.encrypt(jwt.encode(vPayload, JWT_TOKEN_SECRET, 'HS256'));
};

module.exports.verifyJWT = (token) => {
  jwt.decode(token, JWT_TOKEN_SECRET, true, 'HS256'); //  decoded

  return true;
};

module.exports.generatePassword = (length = 8) => {
  let password = '';
  let character = '';
  const numeric = '0123456789';
  const string = 'abcdefghijklmnopqrstuvwxyz';

  while (password.length < length) {
    const entity1 = Math.ceil(string.length * Math.random() * Math.random());
    const entity2 = Math.ceil(numeric.length * Math.random() * Math.random());

    const hold = string.charAt(entity1);

    if (entity1 % 2 === 0) {
      hold.toUpperCase();
    }

    character += hold;
    character += numeric.charAt(entity2);

    password = character;
  }
  return password;
};
