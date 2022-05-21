"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(_field) {
        this._field = _field;
        this.order = new Map();
    }
    Order.prototype.desc = function () {
        this.order.set(this._field, 'desc');
        return this;
    };
    Order.prototype.asc = function () {
        this.order.set(this._field, 'asc');
        return this;
    };
    Order.prototype.build = function () {
        return this.order;
    };
    Object.defineProperty(Order.prototype, "field", {
        get: function () {
            return this._field;
        },
        enumerable: false,
        configurable: true
    });
    Order.ORDER_FILTER = 'order';
    Order.DESC_FILTER = 'desc';
    Order.ASC_FILTER = 'asc';
    return Order;
}());
exports.Order = Order;
