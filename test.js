const { plsParse } = require(".");

(async () => {
  let t = `--testDoubleQuotes "double quotes" --hey withoutQuotes --noValue --nice 'perfect ""' --more-test "'h a'" no key given`;
  let parsed = plsParse(t);

  console.log({parsed});
})();