function sum(a, b) {
  return new Promise((resolve) => setTimeout(() => resolve(a + b), 0));
}

function* generatorWithParameters(a, b) {
  const c = yield [a, b];

  const d = yield c + 1;

  return d + 1;
}

const iterator = generatorWithParameters(1, 2);

sum(...iterator.next().value)
  .then((absum) => {
    const cplus1 = iterator.next(absum);

    console.log(cplus1);

    const dplus1 = iterator.next(0);

    console.log(dplus1);

    const result = iterator.next();

    console.log(result);
  });
