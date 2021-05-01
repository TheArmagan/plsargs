"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plsParse = void 0;
const camel_case_1 = require("camel-case");
const mainRegex = /(--?(?<key>[a-zA-Z0-9-]+)(?: (?<value>(?:[^"'-\s]+)|"(?:[^"]*)"|'(?:[^']*)'))?)|(?<none>(?:[^'-\s]+)|"(?:[^"]*)"|'(?:[^"]*)')/g;
function fixText(text) {
    if (!text)
        return text;
    text = text.trim();
    if ((text.startsWith(`"'`) && text.endsWith(`'"`)) || (text.startsWith(`'"`) && text.endsWith(`"'`))) {
        text = text.slice(2, -2);
    }
    else if ((text.startsWith(`"`) && text.endsWith(`"`)) || text.startsWith(`'`) && text.endsWith(`'`)) {
        text = text.slice(1, -1);
    }
    return text;
}
function plsParse(content) {
    let result = { _: [] };
    Array.from(content.matchAll(mainRegex)).forEach((matched) => {
        var _a;
        if ((_a = matched.groups) === null || _a === void 0 ? void 0 : _a.none) {
            result._.push(fixText(matched.groups.none));
        }
        else {
            result[camel_case_1.camelCase(matched.groups.key)] = fixText(matched.groups.value);
        }
    });
    return result;
}
exports.plsParse = plsParse;
