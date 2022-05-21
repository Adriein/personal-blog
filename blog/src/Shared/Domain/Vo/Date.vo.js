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
exports.DateVo = void 0;
var MalformedVoError_1 = require("Shared/Domain/Error/MalformedVoError");
var ValueObject_1 = require("./ValueObject");
var DateVo = /** @class */ (function (_super) {
    __extends(DateVo, _super);
    function DateVo(date) {
        var _this = _super.call(this) || this;
        _this.regex = new RegExp('([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})');
        _this.formatStringDate = function (date) {
            var _a = date.split('/'), day = _a[0], month = _a[1], year = _a[2];
            return "".concat(month, "-").concat(day, "-").concat(year);
        };
        if (!date) {
            throw new MalformedVoError_1.MalformedVoError('Incorrect Date format');
        }
        if (date instanceof Date) {
            date = date.toString();
        }
        var formattedDate = date;
        if (date.includes('/')) {
            formattedDate = _this.formatStringDate(date);
        }
        var parsedDate = Time.format(new Date(formattedDate), Time.AMERICAN_DATE_FORMAT);
        if (_this.validate(parsedDate)) {
            throw new MalformedVoError_1.MalformedVoError('Incorrect Date format');
        }
        _this._date = new Date(formattedDate);
        return _this;
    }
    DateVo.now = function () {
        return new DateVo(new Date());
    };
    Object.defineProperty(DateVo.prototype, "value", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    DateVo.prototype.validate = function (parsedDate) {
        return !this.regex.test(parsedDate);
    };
    return DateVo;
}(ValueObject_1.ValueObject));
exports.DateVo = DateVo;
