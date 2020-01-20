const timerObj = setTimeout(() => console.log('will i run?'), 0);

timerObj.unref();

setImmediate(() => timerObj.ref());
