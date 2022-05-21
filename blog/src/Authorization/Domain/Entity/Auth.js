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
exports.Auth = void 0;
var cqrs_1 = require("@nestjs/cqrs");
var Auth = /** @class */ (function (_super) {
    __extends(Auth, _super);
    function Auth(_id, _name) {
        var _this = _super.call(this) || this;
        _this._id = _id;
        _this._name = _name;
        return _this;
    }
    return Auth;
}(cqrs_1.AggregateRoot));
exports.Auth = Auth;
