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
exports.ID = void 0;
var MalformedVoError_1 = require("Shared/Domain/Error/MalformedVoError");
var uuid_1 = require("uuid");
var ValueObject_1 = require("./ValueObject");
var ID = /** @class */ (function (_super) {
    __extends(ID, _super);
    function ID(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        if (_this.validate(_this._value)) {
            throw new MalformedVoError_1.MalformedVoError('Incorrect ID format');
        }
        return _this;
    }
    Object.defineProperty(ID.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    ID.generate = function () {
        return new ID((0, uuid_1.v4)());
    };
    ID.prototype.validate = function (value) {
        return !(0, uuid_1.validate)(value);
    };
    return ID;
}(ValueObject_1.ValueObject));
exports.ID = ID;
