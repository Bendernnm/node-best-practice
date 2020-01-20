let a;

class A {
  constructor(opts) {
    this.a = 'a';
    this.opts = opts;
  }

  log() {
    console.log('this a');
  }

  logOpts() {
    console.log(this.opts);
  }

  static getInstance() {
    return a;
  }
}

module.exports = (opts) => {
  if (!a) {
    a = new A(opts);
  }

  return a;
};
