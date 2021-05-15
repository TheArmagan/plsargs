const { plsParseArgs } = require("plsargs");

function parseOptions(arr) {
  let args = plsParseArgs(arr);
  let flags = [...Object.keys(args.raw)].slice(1);

  return {
    flags: flags,
    args: args._,
    contentNoFlags: args._.join(" "),
    getArgs(val) { return args.get(val) },
    hasArg(val) { return args.has(val) }
  };
}

console.log(require("util").inspect(parseOptions(["jahrein", "--ifadeler", "--popo", "hello"]), false, 4, true))
