const plsParse = require(".").plsParse; // ES5

let args = plsParse(`bruh1 -keyQuotes "-val" -keyNoValue1 -keyNoValue2 bruh2 bruh3`);

console.log(args)