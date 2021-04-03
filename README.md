# PLSARGS
Please parse this args! Please!


```js
const { plsParseSync, plsParse } = require(".");

let parsed = plsParseSync(`--testDoubleQuotes "double quotes" --hey withoutQuotes --noValue --nice 'perfect ""' --more-test "'h a'" no key given`);

console.log(parsed);
/*
{
  _: [ 'no', 'key', 'given' ],
  testDoubleQuotes: 'double quotes',
  hey: 'withoutQuotes',
  noValue: undefined,
  nice: 'perfect ""',
  moreTest: 'h a'
}
*/
```

