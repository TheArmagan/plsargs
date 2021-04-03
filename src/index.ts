import { camelCase } from "camel-case";

type Result = {
  _: Array<String>;
  [key: string]: any;
}

const mainRegex = /(--?(?<key>[a-zA-Z0-9-]+)(?: (?<value>(?:[^"'-\s]+)|"(?:[^"]*)"|'(?:[^']*)'))?)|(?<none>(?:[^'-\s]+)|"(?:[^"]*)"|'(?:[^"]*)')/g;

function fixText(text: any): any {
  if (!text) return text;
  text = text.trim();

  if ((text.startsWith(`"'`) && text.endsWith(`'"`)) || (text.startsWith(`'"`) && text.endsWith(`"'`))) {
    text = text.slice(2, -2);
  } else if ((text.startsWith(`"`) && text.endsWith(`"`)) || text.startsWith(`'`) && text.endsWith(`'`)) {
    text = text.slice(1, -1);
  }

  return text;
}

export async function plsParse(content: string): Promise<Result> {

  let result: Result = {_:[]};

  for await (const matched of content.matchAll(mainRegex)) {
    if (matched.groups?.none) {
      result._.push(fixText(matched.groups.none));
    } else {
      result[camelCase(matched.groups.key)] = fixText(matched.groups.none);
    }
  }

  return result;
}

export function plsParseSync(content: string): Result {

  let result: Result = { _: [] };
  
  Array.from(content.matchAll(mainRegex)).forEach((matched) => {
      if (matched.groups?.none) {
        result._.push(fixText(matched.groups.none));
      } else {
        result[camelCase(matched.groups.key)] = fixText(matched.groups.value);
      }
  })

  return result;
}

