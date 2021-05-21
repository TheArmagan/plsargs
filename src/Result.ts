export type TRawResult = {
  _: Array<string>;
  [key: string]: any;
}

export class Result {

  raw: TRawResult = null;
  constructor(raw: TRawResult) {
    this.raw = raw;
  }

  has(key: string | number): boolean {
    if (typeof key == "number") {
      return this.raw._.hasOwnProperty(key);
    } else {
      return this.raw.hasOwnProperty(key);
    }
  }

  get(key: string | number): string | undefined {
    if (typeof key == "number") {
      return this.raw._[key];
    } else {
      return this.raw[key];
    }
  }

  get _(): string[] {
    return this.raw._;
  }

  clone() {
    return new Result({ ...this.raw, _: [ ...this.raw._ ]});
  }
}