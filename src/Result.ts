export type TRawResult = {
  _: Array<string>;
  [key: string]: any;
}

export class Result {

  raw: TRawResult = null;
  constructor(raw: TRawResult) {
    this.raw = raw;
  }

  has(key: string): boolean {
    return this.raw.hasOwnProperty(key);
  }

  get(key: string): string|undefined {
    return this.raw[key];
  }

  get _(): string[] {
    return this.raw._;
  }

}