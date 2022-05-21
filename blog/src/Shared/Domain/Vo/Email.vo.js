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
exports.Email = void 0;
var MalformedVoError_1 = require("Shared/Domain/Error/MalformedVoError");
var ValueObject_1 = require("./ValueObject");
var Email = /** @class */ (function (_super) {
    __extends(Email, _super);
    function Email(email) {
        var _this = _super.call(this) || this;
        _this.regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (_this.validate(email)) {
            throw new MalformedVoError_1.MalformedVoError('Incorrect Email format');
        }
        _this.email = email;
        return _this;
    }
    Object.defineProperty(Email.prototype, "value", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Email.prototype.validate = function (email) {
        return !this.regex.test(email);
    };
    return Email;
}(ValueObject_1.ValueObject));
exports.Email = Email;
