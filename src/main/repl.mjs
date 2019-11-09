import repl from 'repl';

import WordFormattableNumber from './WordFormattableNumber.mjs';

WordFormattableNumber.monkeyPatch();

repl.start({
  prompt: '№ ',
  eval: (cmd, context, filename, callback) => callback(null, cmd),
  writer: output => new WordFormattableNumber(output).toWordString()
});
