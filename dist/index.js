"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plsParseArgs = exports.ResultType = void 0;
var camel_case_1 = require("camel-case");
var Result_1 = require("./Result");
var mainRegex = /--?(?<key>([a-zA-Z0-9_-]+)) +?(?:"(?<keyed0>.*?)"|'(?<keyed1>.*?)'|`(?<keyed2>.*?)`|(?<keyed3>[^"'` ]+))|(?:"(?<keyless0>.*?)"|'(?<keyless1>.*?)'|`(?<keyless2>.*?)`|(?<keyless3>[^"'` ]+))/g;
var valuelessKeyTest = /^--?([a-zA-Z0-9_-]+)/;
var valuelessKeyReplace = /^--?/;
exports.ResultType = Result_1.Result;
function plsParseArgs(content) {
    content = Array.isArray(content) ? content.join(" ") : content;
    var raw = { _: [] };
    var matches = Array.from(content.matchAll(mainRegex));
    matches.forEach(function (match) {
        var _a = match.groups, key = _a.key, keyed0 = _a.keyed0, keyed1 = _a.keyed1, keyed2 = _a.keyed2, keyed3 = _a.keyed3, keyless0 = _a.keyless0, keyless1 = _a.keyless1, keyless2 = _a.keyless2, keyless3 = _a.keyless3;
        var keyed = keyed0 || keyed1 || keyed2 || keyed3;
        var keyless = keyless0 || keyless1 || keyless2 || keyless3;
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
exports.plsParseArgs = plsParseArgs;
