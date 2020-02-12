function* gen() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (err) {
    yield err;
    yield 100;
  }
}

try {
  const c = gen();
  const v1 = c.next();
  const v2 = c.next();
  const v3 = c.next();

  const v4 = c.throw(new Error('gen error'));

  const v5 = c.next();
  const v6 = c.next();

  console.log({
    c,
    v1,
    v2,
    v3,
    v4,
    v5,
    v6
  });
} catch (err) {
  console.error('Didn\'t work');
}
