const { plsParseArgs } = require(".");

let data = plsParseArgs(`bir iki üç dört`);
console.log(data, data.has(1), data.has(5));
let data2 = data.clone();
console.log({ data, data2 });
data._.shift();
console.log(data._, data2._);