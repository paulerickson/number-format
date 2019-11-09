export default class WordFormattableNumber extends Number {

  /**
   * Monkeypatches this functionality onto the Number class itself for convenience.
   * Please monkeypatch responsibly.
   */
  static monkeyPatch() {
    Number.prototype.toWordString = this.prototype.toWordString;
  }

  toWordString(javaLimits = true) {
    if (Number.isNaN(this) || Math.floor(this) != this) {
      return undefined;
    }
    if (javaLimits) {
      if (this < -2147483648 || this > 2147483647) {
        return undefined;
      }
    }
    if (this < 0) {
      return `Negative ${(-this).toWordString(false).toLowerCase()}`;
    }
    switch(Number(this)) {
      case Infinity: return 'Infinity';
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
      case 10: return 'Ten';
      case 11: return 'Eleven';
      case 12: return 'Twelve';
      case 13: return 'Thirteen';
      case 14: return 'Fourteen';
      case 15: return 'Fifteen';
      case 16: return 'Sixteen';
      case 17: return 'Seventeen';
      case 18: return 'Eighteen';
      case 19: return 'Nineteen';
      case 20: return 'Twenty';
      case 30: return 'Thirty';
      case 40: return 'Forty';
      case 50: return 'Fifty';
      case 60: return 'Sixty';
      case 70: return 'Seventy';
      case 80: return 'Eighty';
      case 90: return 'Ninety';
    }
    const magnitudes = [
      { magnitude: 1000000000000000000, unit: 'quintillion' },
      { magnitude: 1000000000000000, unit: 'quadrillion' },
      { magnitude: 1000000000000, unit: 'trillion' },
      { magnitude: 1000000000, unit: 'billion' },
      { magnitude: 1000000, unit: 'million' },
      { magnitude: 1000, unit: 'thousand' },
      { magnitude: 100, unit: 'hundred' },
      { magnitude: 10 },
    ];
    for (let {magnitude, unit} of magnitudes) {
      if (this >= magnitude) {
        const numberOfUnits = Math.floor(this / magnitude);
        const remainder = this - numberOfUnits * magnitude;
        const firstPart = unit? `${(numberOfUnits).toWordString()} ${unit}` : (numberOfUnits * magnitude).toWordString();
        const separator = (this > 100 && remainder < 100) ? ' and ' : ' ';
        const lastPart = remainder? `${separator}${remainder.toWordString().toLowerCase()}` : '';
        return `${firstPart}${lastPart}`;
      }
    }
  }

}
