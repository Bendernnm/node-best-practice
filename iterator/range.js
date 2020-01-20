class Range {
  constructor(from, to) {
    if (!Number.isInteger(to)) {
      throw new Error('Incorrect to');
    }

    if (!Number.isInteger(from)) {
      throw new Error('Incorrect from');
    }

    if (to <= from) {
      throw new Error('Incorrect range');
    }

    this.to = to;
    this.from = from;
    this.current = from;
  }

  [Symbol.iterator]() {
    const self = this;

    return {
      next() {
        if (self.current > self.to) {
          return { done: true };
        }

        const value = self.current;

        self.current += 1;

        return { value, done: false };
      },
    };
  }
}

Object.defineProperty(Range.prototype, Symbol.iterator, {
  configurable: false,
  writable    : false,
  enumerable  : false,
});

module.exports = Range;
