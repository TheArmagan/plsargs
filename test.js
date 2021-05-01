const plsParse = require(".").plsParse; // ES5

let args = plsParse(`"hello world" 'nice world' --argumentWithValue valueMoment --argumentWithValue2 "cool right?" --argumentWithoutValue`);

console.log(args)