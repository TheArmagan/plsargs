import { camelCase } from "camel-case";
import { Result, TRawResult } from "./Result";
const mainRegex = /--?(?<key>([a-zA-Z0-9_-]+)) +?(?:"(?<keyed0>.*?)"|'(?<keyed1>.*?)'|`(?<keyed2>.*?)`|(?<keyed3>[^"'` ]+))|(?:"(?<keyless0>.*?)"|'(?<keyless1>.*?)'|`(?<keyless2>.*?)`|(?<keyless3>[^"'` ]+))/g;
const valuelessKeyTest = /^--?([a-zA-Z0-9_-]+)/;
const valuelessKeyReplace = /^--?/;


export const ResultType = Result;
export function plsParseArgs(content: string|string[]): Result {

  content = Array.isArray(content) ? content.join(" ") : content;
  let raw: TRawResult = { _: [] };
  let matches = Array.from(content.matchAll(mainRegex));

  matches.forEach((match) => {
    let { key, keyed0, keyed1, keyed2, keyed3, keyless0, keyless1, keyless2, keyless3 } = match.groups;
    let keyed = keyed0 || keyed1 || keyed2 || keyed3;
    let keyless = keyless0 || keyless1 || keyless2 || keyless3;

    if (valuelessKeyTest.test(keyed3)) {
      raw[camelCase(keyed3.replace(valuelessKeyReplace, ""))] = undefined;
      raw[camelCase(key.replace(valuelessKeyReplace, ""))] = undefined;
    } else if (valuelessKeyTest.test(keyless)) {
      raw[camelCase(keyless.replace(valuelessKeyReplace, ""))] = undefined;
    } else if (typeof key != "undefined") {
      raw[camelCase(key)] = keyed;
    } else {
      raw._.push(keyless);
    }
  });

  return new Result(raw);
}

