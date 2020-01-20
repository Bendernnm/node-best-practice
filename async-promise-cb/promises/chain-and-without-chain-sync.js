(async () => {
  const p = new Promise((resolve, rejects) => {
    setTimeout(() => {
      console.log('1');
      resolve();
    }, 1000);
  });

  p.finally(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('2');
        resolve();
      });
    }, 3000);

    console.log('3');
  });

  await p;

  console.log('4');
})();
