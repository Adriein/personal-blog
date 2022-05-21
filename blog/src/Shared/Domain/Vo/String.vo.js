"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.StringVo = void 0;
var MalformedVoError_1 = require("Shared/Domain/Error/MalformedVoError");
var ValueObject_1 = require("Shared/Domain/Vo/ValueObject");
var zod_1 = require("zod");
var StringVo = /** @class */ (function (_super) {
    __extends(StringVo, _super);
    function StringVo(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        _this.validate(_value);
        return _this;
    }
    StringVo.prototype.validate = function (primitive) {
        var string = zod_1.z.string();
        try {
            string.parse(this._value);
            return true;
        }
        catch (error) {
            throw new MalformedVoError_1.MalformedVoError('Malformed string VO');
        }
    };
    Object.defineProperty(StringVo.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return StringVo;
}(ValueObject_1.ValueObject));
exports.StringVo = StringVo;
