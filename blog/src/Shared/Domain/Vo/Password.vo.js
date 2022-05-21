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
exports.Password = void 0;
var ValueObject_1 = require("./ValueObject");
var Array_utils_1 = require("../Helper/Array.utils");
var Password = /** @class */ (function (_super) {
    __extends(Password, _super);
    function Password(password) {
        var _this = _super.call(this) || this;
        _this.password = password;
        return _this;
    }
    Object.defineProperty(Password.prototype, "value", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Password.prototype.validate = function () {
        return true;
    };
    Password.generate = function () {
        var words = ["bakasta", "noelle", "yami", "vanessa", "yuno", "julius", "draken", "mikey", "baji", "chifuyu"];
        var chars = "!@#$%^&*0123456789";
        var randomIndex = Math.floor(Math.random() * words.length);
        var basePassword = words[randomIndex];
        var passwordSlug = [];
        Array_utils_1.ArrayUtils.times(5, function () {
            var randomNumber = Math.floor(Math.random() * chars.length);
            passwordSlug.push(chars.split('')[randomNumber]);
        });
        var password = basePassword.concat.apply(basePassword, passwordSlug);
        return new Password(password);
    };
    return Password;
}(ValueObject_1.ValueObject));
exports.Password = Password;
