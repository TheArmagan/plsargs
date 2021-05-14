# PLSARGS
😎 Another Argument Parser: But it's supports quotes!

### Supported Quote Types
- ` "" `
- ` '' `
- ` `` `
- ` Or normal text without spaces.. `

### Basic Usage Examples
```js
import { plsParseArgs } from "plsargs"; // ES6
// OR //
const plsParse = require("plsargs").plsParseArgs; // ES5

let args = plsParse(`"hello world" 'nice world' withoutQuotes --argumentWithValue valueMoment --argumentWithValue2 "cool right?" --argumentWithoutValue`);

console.log(args.has("argumentWithoutValue"));
// => true

console.log(args.get("argumentWithoutValue"));
// => undefined

console.log(args.get("argumentWithValue"));
// => "valueMoment"

console.log(args.get("argumentWithValue2"));
// => "cool right?"

console.log(args._[0]);
// => "hello world"

console.log(args._[1]);
// => "nice world"

console.log(args._[2]);
// => "withoutQuotes"
```

### Last update:
 - No value keys are fixed!
