"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var tslib_1 = require("tslib");
var Result = /** @class */ (function () {
    function Result(raw) {
        this.raw = null;
        this.raw = raw;
    }
    Result.prototype.has = function (key) {
        if (typeof key == "number") {
            return this.raw._.hasOwnProperty(key);
        }
        else {
            return this.raw.hasOwnProperty(key);
        }
    };
    Result.prototype.get = function (key) {
        if (typeof key == "number") {
            return this.raw._[key];
        }
        else {
            return this.raw[key];
        }
    };
    Object.defineProperty(Result.prototype, "_", {
        get: function () {
            return this.raw._;
        },
        enumerable: false,
        configurable: true
    });
    Result.prototype.clone = function () {
        return new Result(tslib_1.__assign(tslib_1.__assign({}, this.raw), { _: tslib_1.__spreadArray([], this.raw._) }));
    };
    return Result;
}());
exports.Result = Result;
