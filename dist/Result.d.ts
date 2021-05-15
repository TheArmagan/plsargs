export declare type TRawResult = {
    _: Array<string>;
    [key: string]: any;
};
export declare class Result {
    raw: TRawResult;
    constructor(raw: TRawResult);
    has(key: string): boolean;
    get(key: string | number): string | undefined;
    get _(): string[];
}
