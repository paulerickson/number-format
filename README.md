# Number Formatting

## WordFormattableNumber

Adds a `toWordString` method to numbers, to serialize as English words, like "Five thousand two hundred and thirty seven".

### REPL

Start an interactive repl with `npm start`.

### Monkeypatch into another application

```javascript
import { WordFormattableNumber } from 'number-format';

WordFormattableNumber.monkeyPatch();
console.log((7).toWordString()); // Seven
```

## Contributing

### Versioning

This project uses [Semantic Versioning](https://semver.org/).

### Unit Tests

Run unit tests with `npm test`
