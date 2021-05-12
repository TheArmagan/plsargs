"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plsParse = void 0;
const camel_case_1 = require("camel-case");
const Result_1 = require("./Result");
const mainRegex = /--?(?<key>([a-zA-Z0-9_-]+)) +?(?:"(?<keyed0>.*?)"|'(?<keyed1>.*?)'|`(?<keyed2>.*?)`|(?<keyed3>[^"'` ]+))|(?:"(?<keyless0>.*?)"|'(?<keyless1>.*?)'|`(?<keyless2>.*?)`|(?<keyless3>[^"'` ]+))/g;
const valuelessKeyTest = /^--?([a-zA-Z0-9_-]+)/;
const valuelessKeyReplace = /^--?/;
function plsParse(content) {
    content = Array.isArray(content) ? content.join(" ") : content;
    let raw = { _: [] };
    let matches = Array.from(content.matchAll(mainRegex));
    matches.forEach((match) => {
        let { key, keyed0, keyed1, keyed2, keyed3, keyless0, keyless1, keyless2, keyless3 } = match.groups;
        let keyed = keyed0 || keyed1 || keyed2 || keyed3;
        let keyless = keyless0 || keyless1 || keyless2 || keyless3;
        if (valuelessKeyTest.test(keyed3)) {
            raw[camel_case_1.camelCase(keyed3.replace(valuelessKeyReplace, ""))] = undefined;
            raw[camel_case_1.camelCase(key.replace(valuelessKeyReplace, ""))] = undefined;
        }
        else if (valuelessKeyTest.test(keyless)) {
            raw[camel_case_1.camelCase(keyless.replace(valuelessKeyReplace, ""))] = undefined;
        }
        else if (typeof key != "undefined") {
            raw[camel_case_1.camelCase(key)] = keyed;
        }
        else {
            raw._.push(keyless);
        }
    });
    return new Result_1.Result(raw);
}
exports.plsParse = plsParse;
