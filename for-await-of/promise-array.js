const timer = (duration, data = 0) => new Promise((resolve) => setTimeout(() => resolve(data), duration));

const promises = [
  timer(1000, 2),
  timer(2000, 1),
  timer(1500, 3),
];

(async function () {
  for await (const promise of promises) {
    console.log(promise);
  }
})();
