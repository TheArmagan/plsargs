"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(raw) {
        this.raw = null;
        this.raw = raw;
    }
    has(key) {
        return this.raw.hasOwnProperty(key);
    }
    get(key) {
        return this.raw[key];
    }
    get _() {
        return this.raw._;
    }
}
exports.Result = Result;
