import WordFormattableNumberTest from './WordFormattableNumberTest.mjs';

const test = new WordFormattableNumberTest();
let pass = 0;
let fail = 0;

Object
  .getOwnPropertyNames(Object.getPrototypeOf(test))
  .filter(name => name !== 'constructor')
  .map(name => test[name])
  .filter(property => typeof property === 'function')
  .forEach(method => {
    try {
      method.bind(test)();
      ++pass;
      console.info(`\x1b[32m✔ ${method.name}\x1b[0m`);
    }
    catch (e) {
      process.exitCode = 1;
      ++fail;
      console.info(`\x1b[31m✘ ${method.name}\x1b[0m`);
      console.error(e.stack || e)
    }
    console.groupEnd();
  })
;
console.info(`${pass}/${pass+fail} tests passed`);
