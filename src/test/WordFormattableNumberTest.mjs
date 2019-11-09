import assert from 'assert';

import WordFormattableNumber from '../main/WordFormattableNumber.mjs';

export default class WordFormattableNumberTest {

  constructor() {
    WordFormattableNumber.monkeyPatch();
  }

  'there are words for single digit numbers'() {
    assert.equal((0).toWordString(), 'Zero');
  }

  'there are words for teens'() {
    assert.equal((13).toWordString(), 'Thirteen');
  }

  'there are words for some numbers in the tens'() {
    assert.equal((80).toWordString(), 'Eighty');
  }

  'some numbers in the tens are phrases'() {
    assert.equal((85).toWordString(), 'Eighty five');
  }

  'hundreds are counted in terms of single digit numbers'() {
    assert.equal((300).toWordString(), 'Three hundred');
    assert.equal((101).toWordString(), 'One hundred and one');
  }

  'numbers above and below one hundred are separated by "and"'() {
    assert.equal((5200).toWordString(), 'Five thousand two hundred');
    assert.equal((5230).toWordString(), 'Five thousand two hundred and thirty');
    assert.equal((5237).toWordString(), 'Five thousand two hundred and thirty seven');
  }

  'bigger numbers'() {
    assert.equal((5000).toWordString(), 'Five thousand');
    assert.equal((20000).toWordString(), 'Twenty thousand');
    assert.equal((300001).toWordString(), 'Three hundred thousand and one');
    assert.equal((1000000).toWordString(), 'One million');
    assert.equal((1000999).toWordString(), 'One million nine hundred and ninety nine');
  }

  'there is a word for negative numbers'() {
    assert.equal((-1).toWordString(), 'Negative one');
  }

  'words for decimal numbers are undefined'() {
    assert.equal((1.23).toWordString(), undefined);
    assert.equal((100.01).toWordString(), undefined);
  }

  'words for numbers above and below the java limits are undefined'() {
    assert.equal((-2147483648).toWordString(), 'Negative two quadrillion one trillion four billion seven million four hundred thousand eighty three thousand six hundred and forty eight');
    assert.equal((2147483647).toWordString(), 'Two quadrillion one trillion four billion seven million four hundred thousand eighty three thousand six hundred and forty seven');
    assert.equal((-2147483649).toWordString(), undefined);
    assert.equal((2147483648).toWordString(), undefined);
    assert.equal((1000000000500).toWordString(), undefined);
    assert.equal(Infinity.toWordString(), undefined);
    assert.equal((-Infinity).toWordString(), undefined);
  }

  'words for non-numbers are undefined'() {
    assert.equal((NaN).toWordString(), undefined);
  }

}
