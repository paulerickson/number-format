import assert from 'assert';

import WordFormattableNumber from '../main/WordFormattableNumber.mjs';

export default class WordFormattableNumberTest {

  constructor() {
    WordFormattableNumber.monkeyPatch();
  }

  'no number, no word'() {
    assert.equal((NaN).toWordString(), '');
  }

  'single digit example'() {
    assert.equal((0).toWordString(), 'Zero');
  }

  'teens'() {
    assert.equal((13).toWordString(), 'Thirteen');
  }

  'tens'() {
    assert.equal((80).toWordString(), 'Eighty');
    assert.equal((85).toWordString(), 'Eighty five');
  }

  'hundreds'() {
    assert.equal((100).toWordString(), 'One hundred');
    assert.equal((101).toWordString(), 'One hundred and one');
  }

  'bigger numbers'() {
    assert.equal((5000).toWordString(), 'Five thousand');
    assert.equal((20000).toWordString(), 'Twenty thousand');
    assert.equal((300001).toWordString(), 'Three hundred thousand and one');
    assert.equal((1000000).toWordString(), 'One million');
    assert.equal((1000999).toWordString(), 'One million nine hundred and ninety nine');
    assert.equal((1000000000500).toWordString(), 'One hundred quintillion five hundred');
  }

  'numbers above and below one hundred are separated by "and"'() {
    assert.equal((5200).toWordString(), 'Five thousand two hundred');
    assert.equal((5230).toWordString(), 'Five thousand two hundred and thirty');
    assert.equal((5237).toWordString(), 'Five thousand two hundred and thirty seven');
  }

  'some numbers are so big we don\'t have words that big!'() {
    assert.equal((10000000000000).toWordString(), 'One thousand quintillion');
    assert.equal((10000000000 * 10000000000).toWordString(), 'One quintillion quintillion');
    assert.equal((1000 * 10000000000 * 10000000000).toWordString(), 'One thousand quintillion quintillion');
  }

  'negative'() {
    assert.equal((-1).toWordString(), 'Negative one');
  }

  'infinity'() {
    assert.equal(Infinity.toWordString(), 'Infinity');
    assert.equal((-Infinity).toWordString(), 'Negative infinity');
  }

  'bigints are not supported'() {
    assert.equal((10000000000n * 10000000000n + 4n).toWordString(), 'One quintillion quintillion and four');
  }

  'decimals are not supported'() {
    assert.equal((1.23).toWordString(), 'One two tenths and three hundredths');
    assert.equal((100.01).toWordString(), 'One hundred and one hundredth');
  }

}
