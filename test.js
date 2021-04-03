const { plsParseSync } = require(".");

let parsed = plsParseSync(`--testDoubleQuotes "double quotes" --hey withoutQuotes --noValue --nice 'perfect ""' --more-test "'h a'" no key given`);

console.log(parsed);