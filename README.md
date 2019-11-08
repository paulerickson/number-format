# Number Formatting

## WordFormattableNumber

Adds a `toWordString` method to numbers, to serialize as English words, like "Five thousand two hundred and thirty seven".

### Usage

```javascript
import WordFormattableNumber from 'number-formatting';

console.log(new WordFormattableNumber(7).toWordString()); // Seven

// OR monkey-patch the Number class globally

WordFormattableNumber.monkeyPatch();
console.log((7).toWordString()); // Seven
```

## Contributing

### Versioning

This project uses [Semantic Versioning](https://semver.org/).

### Unit Tests

Run unit tests with `npm test`
