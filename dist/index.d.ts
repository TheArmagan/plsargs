declare type Result = {
    _: Array<String>;
    [key: string]: any;
};
export declare function plsParse(content: string): Promise<Result>;
export declare function plsParseSync(content: string): Result;
export {};
