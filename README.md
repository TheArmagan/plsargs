# PLSARGS
Please parse this args! Please!


```js
const { plsParse } = require(".");

let parsed = plsParse(`--testDoubleQuotes "double quotes" --hey withoutQuotes --noValue --nice 'perfect ""' --more-test "'h a'" no key given`);

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

