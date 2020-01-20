/* eslint-disable */
const fs = require('fs');

const cb2promise = require('../cb2promise');

const fsPromise = {};

const methods = [
  'readdir',
  'readFile',
  'access',
  'mkdir',
  'unlink',
  'copyFile',
];

methods.forEach(method =>
	fsPromise[method] = (...args) =>
		new Promise((resolve, reject) =>
			fs[method](...args, cb2promise(resolve, reject))));

// @deprecated
module.exports = fsPromise;
